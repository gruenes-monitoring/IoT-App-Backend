//const Measurement = require('./mqtt_client/measurement.js');
const Device = require('./mqtt_client/device.js');
const GraphQL_Interface = require('./mqtt_client/graphql_interface.js');
var mqtt = require('mqtt');

const ipBroker = 'mqtt://40.89.163.191:1883';
const ipGraphQL = 'http://40.89.134.226:4000/graphql';

try {
	GraphQL_Interface.init(ipGraphQL);
} catch (Ex) {
	console.log("GraphQL-API unter IP: " + ipGraphQL + " nicht erreichbar. Fehlermeldung: " + Ex);
}

try {
	var client  = mqtt.connect(ipBroker);
	
	client.on('connect', function () {
	  client.subscribe('#'); 
	});
	 
	client.on('message', function (topic, payload) {
	  var device;
	  console.log(topic.toString() + ':   ' + payload.toString());
	  try {
		device = new Device(topic);
	  } catch(Ex) {
		console.log(Ex);
	  }
	  if(device) {
		var message = JSON.parse(payload);
		GraphQL_Interface.doInsert(device, message);
	  }
	});
} catch (Ex) {
	console.log("Broker unter IP: " + ipBroker + " nicht erreichbar. Fehlermeldung: " + Ex);
}
