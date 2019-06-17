//var expect = require('chai').expect;
var assert = require('chai').assert;
var Device = require('../mqtt_client/device');

describe('Device-constructor with topio length of 4', function () {
  it('should successfully create a device with minimum of values set', function () {
    
    // 1. ARRANGE
    var topic = "country/city/address/room";

    // 2. ACT
    var device = new Device(topic);

    // 3. ASSERT
    assert.exists(device);
	assert.equal(device.country, "country");
	assert.equal(device.city, "city");
	assert.equal(device.address, "address");
	assert.equal(device.room, "room");
	
	assert.notExists(device.floor);
	assert.notExists(device.building);
  });
});

describe('Device-constructor with topio length of 5 (No Building)', function () {
  it('should successfully create a device with all values except Building set', function () {
    
    // 1. ARRANGE
    var topic = "country/city/address/1/room";

    // 2. ACT
    var device = new Device(topic);

    // 3. ASSERT
    assert.exists(device);
	assert.equal(device.country, "country");
	assert.equal(device.city, "city");
	assert.equal(device.address, "address");
	assert.equal(device.floor, 1);
	assert.equal(device.room, "room");
	
	assert.notExists(device.building);
  });
});

describe('Device-constructor with topio length of 5 (No Floor)', function () {
  it('should successfully create a device with all values except Floor set', function () {
    
    // 1. ARRANGE
    var topic = "country/city/address/building/room";

    // 2. ACT
    var device = new Device(topic);

    // 3. ASSERT
    assert.exists(device);
	assert.equal(device.country, "country");
	assert.equal(device.city, "city");
	assert.equal(device.address, "address");
	assert.equal(device.building, "building");
	assert.equal(device.room, "room");
		
	assert.notExists(device.floor);
  });
});

describe('Device-constructor with topio length of 6', function () {
  it('should successfully create a device with all values set', function () {
    
    // 1. ARRANGE
    var topic = "country/city/address/building/1/room";

    // 2. ACT
    var device = new Device(topic);

    // 3. ASSERT
    assert.exists(device);
	assert.equal(device.country, "country");
	assert.equal(device.city, "city");
	assert.equal(device.address, "address");
	assert.equal(device.building, "building");
	assert.equal(device.floor, 1);
	assert.equal(device.room, "room");
  });
});

describe('Device-constructor with Floor not being an Integer', function () {
  it('should throw an exception', function () {
    
    // 1. ARRANGE
    var topic = "country/city/address/building/noNumber/room";

    // 2. ACT
	var device;
	var badConstructor = function() { device = new Device(topic) };

    // 3. ASSERT
    assert.throws(badConstructor, Error, 'Ungültiges Topic!');
	assert.notExists(device);
  });
});

describe('Device-constructor with topic length of 7 (too long)', function () {
  it('should throw an exception', function () {
    
    // 1. ARRANGE
    var topic = "country/city/address/building/12/room/seven";

    // 2. ACT
	var device;
	var badConstructor = function() { device = new Device(topic) };

    // 3. ASSERT
    assert.throws(badConstructor, Error, 'Ungültiges Topic!');
	assert.notExists(device);
  });
});

describe('Device-constructor with topic length of 3 (too short)', function () {
  it('should throw an exception', function () {
    
    // 1. ARRANGE
    var topic = "one/two/three";

    // 2. ACT
	var device;
	var badConstructor = function() { device = new Device(topic) };

    // 3. ASSERT
    assert.throws(badConstructor, Error, 'Ungültiges Topic!');
	assert.notExists(device);
  });
});