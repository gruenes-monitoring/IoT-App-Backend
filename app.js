//const Measurement = require('./mqtt_client/measurement.js');
const Device = require('./mqtt_client/device.js');
const GraphQL_Interface = require('./mqtt_client/graphql_interface.js');
var mqtt = require('mqtt');

var client  = mqtt.connect('mqtt://40.89.163.191:1883');
GraphQL_Interface.init('http://40.89.134.226:4000/graphql');
 
client.on('connect', function () {
  client.subscribe('#'); 
});
 
client.on('message', function (topic, payload) {
  // message is Buffer
  console.log(topic.toString() + ':   ' + payload.toString());
  try {
	var device = new Device(topic);
  } catch(Ex) {
    console.log(Ex);
  }
  if(device) {
	var message = JSON.parse(payload);
	GraphQL_Interface.doInsert(device, message);
  }
});

