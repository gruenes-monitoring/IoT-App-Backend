//const Measurement = require('./measurement.js');
const Device = require('./device.js');

var mqtt = require('mqtt');

var client  = mqtt.connect('mqtt://40.89.163.191:1883');
 
client.on('connect', function () {
  client.subscribe('#') 
})
 
client.on('message', function (topic, payload) {
  // message is Buffer
  console.log(topic.toString() + ':   ' + payload.toString());
  var device = new Device(topic);
  if(device.id) {
	var message = JSON.parse(payload);
	console.log(message.measurement.timestamp.toString());
  }
})