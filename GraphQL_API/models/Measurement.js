import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Create the User Schema.
const MeasurementSchema = new Schema({
   MeasurementID: {
    type: Number,
    required: true,
    unique: true
  },
    DeviceID: {
    type: Number,
    required: true,
unique:false
  },
  Timestamp: {
	  type: Date,
    required: true
  },
  Temperature: {
    type: Number,
    required: false
  },
    Humidity: {
    type: Number,
    required: false
  },
    Brightness: {
	    type: Number,
    required: false
  }
    
});

const  Measurement= mongoose.model("Measurement", MeasurementSchema);
export default Measurement;
