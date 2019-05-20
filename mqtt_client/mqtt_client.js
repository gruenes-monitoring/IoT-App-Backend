const Measurement = require('./measurement.js');
const Device = require('./device.js');

var mqtt = require('mqtt');

var client  = mqtt.connect('mqtt://40.89.163.191:1883');
 
client.on('connect', function () {
  client.subscribe('#') 
})
 
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(topic.toString() + ':   ' + message.toString());
  var device = new Device(topic);
})