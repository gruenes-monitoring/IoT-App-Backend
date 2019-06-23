class Measurement {
	constructor(timestamp, temperature, humidity, brightness) {
		this.timestamp = timestamp;
		this.temperature = temperature;
		this.humidity = humidity;
		this.brightness = brightness;
	}
}

module.exports = Measurement;