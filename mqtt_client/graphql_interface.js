const Device = require('./device.js');
const { createApolloFetch } = require('apollo-fetch');

class GraphQL_Interface {
	constructor(connString) {
		this.fetch = createApolloFetch({
		  uri: 'http://40.89.134.226:4000/graphql',
		});
	}
	
	doInsert(device, message) {
		
	}
	
	checkDeviceID (device) {
		var query = "query { deviceQuery (Active: true, Country: \"" + device.country + "\", City: \"" + device.city + "\", Address: \"" + device.address + "\", Room:\"" + device. room + "\"";
		if(device.building) query += ", Building: \"" + device.building + "\"";
		if(device.floor) query += ", Floor: \"" + device.floor + "\"";
		query += ") { DeviceID } }";
		console.log(query);
		this.fetch({
			query:query,
		}).then(res => {
			return res.data;
		});
	}
	
	insertDevice(device) {
		/**
		mutation {addDevice(Country: "country", City: "city", Address:"address", Room:"room", Active: true) {
			  Description
			  Building
			  Floor
			  Latitude
			  Longitude
			} 
		}
		**/
		var mutation = "mutation {addMeasurement(Timestamp: \"" + message.measurement.timestamp + "\", DeviceID: " + device.id + ", MeasurementID: 16, Temperature: " + message.measurement.temperature + ", Humidity: " + message.measurement.humidity + ", Brightness: " + message.measurement.brightness + ") { MeasurementID } }";
		console.log(mutation);

		this.fetch({
			query:mutation,
			//query: 'query { deviceQuery(DeviceID: ' + device.id + ') { DeviceID } }',
			//query: 'query { measurementQuery(DeviceID: ' + device.id + ') { DeviceID } }',
		}).then(res => {
			console.log(res.data);
		});
	}
}

module.exports = GraphQL_Interface;