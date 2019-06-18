import json
import green_monitoring

FILE_CONFIG_PASS = "test/test_config_pass.json"
FILE_CONFIG_BOUNDS = "test/test_config_bounds.json"
config_pass = green_monitoring.Config(FILE_CONFIG_PASS)
config_bounds = green_monitoring.Config(FILE_CONFIG_BOUNDS)

def test_config_ip():
    assert config_pass.ip == "127.0.0.1", "Config has read IP"

def test_config_interval_read():
    assert config_pass.interval == 42, "Config has read Interval"
    
def test_config_interval_bounds():
    assert config_bounds.interval == 2, "Interval is in Bounds"
   
def test_config_topic():
    assert config_pass.topic == "this/is/a/test", "Config has read Topic"

def test_config_logger():
    assert config_pass.logger == True, "Config has read Logger"

def config_change_ip(endpoint):
    with open(FILE_CONFIG_PASS) as json_file:  
        data = json.load(json_file)
        str_ip = data["mqtt-ip"]
        str_ip = str_ip[:-1]+endpoint
        data["mqtt-ip"] = str_ip
    with open(FILE_CONFIG_PASS, 'w') as outfile:  
        json.dump(data, outfile, indent=4, sort_keys=True)

def test_config_update():
    assert config_pass.checkUpdate() == False
    config_change_ip("9")
    assert config_pass.checkUpdate() == True
    config_change_ip("1")

