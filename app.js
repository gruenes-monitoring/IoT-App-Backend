//const Measurement = require('./mqtt_client/measurement.js');
const Device = require('./mqtt_client/device.js');
const GraphQL_Interface = require('./mqtt_client/graphql_interface.js');
var mqtt = require('mqtt');

var client  = mqtt.connect('mqtt://40.89.163.191:1883');
var graphQL = new GraphQL_Interface('http://40.89.134.226:4000/graphql');
 
client.on('connect', function () {
  client.subscribe('#'); 
});
 
client.on('message', function (topic, payload) {
  // message is Buffer
  console.log(topic.toString() + ':   ' + payload.toString());
  var device = new Device(topic);
  var message = JSON.parse(payload);
  graphQL.doInsert(device, message);

	//console.log(message.measurement.timestamp.toString());
	/**
	var mutation = "mutation {addMeasurement(Timestamp: \"" + message.measurement.timestamp + "\", DeviceID: " + device.id + ", MeasurementID: 16, Temperature: " + message.measurement.temperature + ", Humidity: " + message.measurement.humidity + ", Brightness: " + message.measurement.brightness + ") { MeasurementID } }";
	console.log(mutation);

	fetch({
		query:mutation,
		//query: 'query { deviceQuery(DeviceID: ' + device.id + ') { DeviceID } }',
		//query: 'query { measurementQuery(DeviceID: ' + device.id + ') { DeviceID } }',
	}).then(res => {
		console.log(res.data);
	});
	**/
});

