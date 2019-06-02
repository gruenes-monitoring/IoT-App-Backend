import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Create the User Schema.
const DeviceSchema = new Schema({
  DeviceID: {
    type: Number,
    required: true,
    unique: true
  },
  Description: {
    type: String,
    required: false
  },
  Country: {
    type: String,
    required: true
  },
    City: {
    type: String,
    required: true
  },
    Address: {
    type: String,
    required: true
  },
    Building: {
    type: String,
    required: false
  },
    Floor: {
    type: Number,
    required: false
  },
    Room: {
    type: String,
    required: true
  },
    Latitude: {
    type: String,
    required: false
  },
    Longitude: {
    type: String,
    required: false
  },
    Active: {
    type: Boolean,
    required: true
  }
});

const Device = mongoose.model("Device", DeviceSchema);
export default Device;
