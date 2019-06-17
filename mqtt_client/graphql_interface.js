const Device = require('./device.js');
const { createApolloFetch } = require('apollo-fetch');

class GraphQL_Interface {
	/**constructor(connString) {
		this.fetch = createApolloFetch({
		  uri: 'http://40.89.134.226:4000/graphql',
		});
	}**/
	
	static init(connString) {
		this.fetch = createApolloFetch({
		  uri: 'http://40.89.134.226:4000/graphql',
		});
	}
	
	static doInsert(device, message) {
		var query = "query { deviceQuery (Active: true, Country: \"" + device.country + "\", City: \"" + device.city + "\", Address: \"" + device.address + "\", Room:\"" + device. room + "\"";
		if(device.building) query += ", Building: \"" + device.building + "\"";
		if(device.floor) query += ", Floor: \"" + device.floor + "\"";
		query += ") { _id } }";
		console.log(query);
		this.fetch({
			query:query,
		}).then(res => {
			this.checkDeviceID(device, message, res.data);
		});
	}
	
	static checkDeviceID(device, message, data) {
		console.log(data);
		if(data.deviceQuery) {
			if(data.deviceQuery.length > 0) {
				device.id = data.deviceQuery[0]._id;
				this.insertMeasurement(device, message);
			} else {
				this.insertDevice(device, message);
			}
		}
	}
	
	static async insertDevice(device, message) {
		var mutation = "mutation { addDevice ( Active: true, Country: \"" + device.country + "\", City: \"" + device.city + "\", Address: \"" + device.address + "\", Room:\"" + device. room + "\"";
		if(device.building) mutation += ", Building: \"" + device.building + "\"";
		if(device.floor) mutation += ", Floor: \"" + device.floor + "\"";
		mutation += ") { _id } }";
		
		console.log(mutation);
		this.fetch({
			query:mutation,
		}).then(res => {
			if(res.data.addDevice._id) {
				device.id = res.data.addDevice._id;
				this.insertMeasurement(device, message);
			}
		});
	}
	
	static insertMeasurement(device, message) {
		var mutation = "mutation {addMeasurement(Timestamp: \"" + message.measurement.timestamp + "\", DeviceID: \"" + device.id + "\", Temperature: " + message.measurement.temperature + ", Humidity: " + message.measurement.humidity + ", Brightness: " + message.measurement.brightness + ") { _id } }";
		console.log(mutation);

		this.fetch({
			query:mutation,
		}).then(res => {
			console.log("Measurement mit ID " + res.data.addMeasurement._id + "eingefügt.");
		});
	}
}

module.exports = GraphQL_Interface;