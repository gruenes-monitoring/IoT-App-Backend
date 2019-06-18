#!/usr/bin/env python
# -*- coding: utf-8 -*-
from __future__ import print_function
import os, sys, getopt
import json, time, keyboard
import logging
from logging.handlers import RotatingFileHandler

if __name__ == "__main__":
    import smbus
    import Adafruit_DHT
    import paho.mqtt.client as mqtt

FILE_CONFIG = "./gm_config.json"
FILE_LOGGING = "./gm_log.log"
I2C_ADDRESS_LIGHT = 0x23

class Config:
    def __init__(self, filename):
        self.filename = filename
        self._cached_stamp = os.stat(self.filename).st_mtime
        self.verbose = False
        self.loadConfig()

    def loadConfig(self):
        with open(self.filename) as json_file:
            data = json.load(json_file)
            self.ip = data["mqtt-ip"]
            self.interval = max(2, int(data["interval"]))
            self.topic = data["topic"]
            self.logger = data["logger"]=="true"

    def printConfig(self):
        log("Config Loaded:")
        log("  Broker IP: {0},\n  Message Interval: {1},\n  Topic: {2},\n  Logging: {3}".format(self.ip, self.interval, self.topic, self.logger))

    def checkUpdate(self):
        stamp = os.stat(self.filename).st_mtime
        if stamp != self._cached_stamp:
            log("Configuration File changed, updating...")
            self._cached_stamp = stamp
            old_ip = self.ip
            self.loadConfig()
            self.printConfig()
            return old_ip != self.ip
        return False

config = Config(FILE_CONFIG)
client = None

log_formatter = logging.Formatter("%(asctime)s %(levelname)s %(funcName)s(%(lineno)d) %(message)s")
log_file_handler = RotatingFileHandler(FILE_LOGGING, mode='a', maxBytes=5*1024*1024, backupCount=2, encoding=None, delay=0)
log_file_handler.setFormatter(log_formatter)
logger = logging.getLogger("root")
logger.setLevel(logging.INFO)
logger.addHandler(log_file_handler)

suppress_logging = False
mqtt_response = ""

def log(message):
    if not suppress_logging:
        if config.logger:
            logger.info(message)
        if config.verbose:
            print(message);

def printHelp(file):
    print(file)
    print("-h, --help: Display this menu")
    print("-v, --verbose: Enable console logging")

def launchArgs(argv):
    try:
        opts, args = getopt.getopt(argv[1:],"hv",["help","verbose"])
    except getopt.GetoptError:
        printHelp(argv[0])
        sys.exit(2)
    for opt, arg in opts:
        if opt in ("-h", "--help"):
            printHelp(argv[0])
            sys.exit()
        elif opt in ("-v", "--verbose"):
            config.verbose = True

def on_connect(client, userdata, flags, rc):
    if rc==0:
        global mqtt_response
        mqtt_response = "Connection to MQTT Broker established, Response Code: "+ str(rc)
    else:
        log("Error on establishing connection to MQTT Broker, Response Code: "+ str(rc))
        logging.shutdown()
        sys.exit(2)

def printProgress(length, x=-1):
    sys.stdout.write('\r')
    sys.stdout.write(("[{:"+str(length)+"s}]").format('='*(length if x<0 else x)))
    sys.stdout.flush()
    if x<0:
        print("")

def initSensors():
    global suppress_logging
    suppress_logging = True
    for sensorTest in range(5):
        printProgress(20, sensorTest*4)
        temperature, humidity = getTempAndHumid()
        light = getLight()
        time.sleep(1)
        printProgress(20, sensorTest*4+2)
        time.sleep(1)
    printProgress(20)
    suppress_logging = False

def initWait():
    for wait in range(20):
        printProgress(20, wait)
        time.sleep(0.25)
    printProgress(20)

def initMQTT():
    global client
    client = mqtt.Client()
    client.on_connect = on_connect
    try:
        client.connect(config.ip, 1883, 60)
    except IOError as e:
        log("IO Error on connection:")
        log(e)
        logging.shutdown()
        sys.exit(2)
    client.loop_start()
    log("Waiting 5 seconds for broker response")
    initWait()
    log(mqtt_response)

def stopMQTT():
    if client is not None:
        client.loop_stop()

def getTempAndHumid():
    humidity, temperature = Adafruit_DHT.read_retry(Adafruit_DHT.DHT22, 4)
    if humidity is not None and temperature is not None:
        log("Temperature: {0:0.1f}°C  Humidity: {1:0.1f}%".format(temperature, humidity))
    else:
        log("Failed to get reading for Temperature or Humidity.")
        temperature = -273.0
        humidity = -1
    return temperature, humidity

def getLight():
    data = bus.read_i2c_block_data(I2C_ADDRESS_LIGHT,0x20)
    light = (data[1] + (256 * data[0])) / 1.2
    log("Light Level: {0:0.2f} lx".format(light))
    return light

def mainLoop():
    while True:
        if config.checkUpdate():
            log("\nBroker IP has changed, establishing new Connection")
            stopMQTT()
            initMQTT()
        temperature, humidity = getTempAndHumid()
        light = getLight()
        message = {
            "timestamp": str(time.time()),
            "temperature": str(temperature),
            "humidity": str(humidity),
            "brightness": light
        }
        client.publish(config.topic, json.dumps(message))
        time.sleep(config.interval)

if __name__ == "__main__":
    launchArgs(sys.argv)
    log("")
    log("===============================================")
    log("Grünes Monitoring")
    log("===============================================")
    log("")
    try:
        config.printConfig()
    
        log("Connecting I2C Bus")
        bus = smbus.SMBus(1)
    
        log("Testing & Calibrating Sensors - This will take 10 seconds")
        log("The data gathered will not be sent to the broker")
        initSensors()
    
        log("Establishing MQTT Connection")
        initMQTT()
    
        log("Beginning Main Loop")
        mainLoop()
    except KeyboardInterrupt:
        stopMQTT()
        log("\nProgram terminated. Good bye!")
        logging.shutdown()
        pass
