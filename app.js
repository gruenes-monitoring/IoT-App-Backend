//const Measurement = require('./mqtt_client/measurement.js');
const Device = require('./mqtt_client/device.js');
const { createApolloFetch } = require('apollo-fetch');

var mqtt = require('mqtt');


const fetch = createApolloFetch({
  uri: 'http://40.89.134.226:4000/graphql',
});

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
	fetch({
		query: 'query { measurementQuery(DeviceID: 1) { Timestamp } }',
	}).then(res => {
		console.log(res.data);
	});
  }
})

//query:'mutation {addMeasurement(Timestamp: "test", DeviceID: 1, MeasurementID: 15) { MeasurementID } }',
