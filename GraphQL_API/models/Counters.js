import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Create the User Schema.
const CountersSchema = new Schema({
  _id: {
    type: String,
    required: true,
    unique: true
  },
 sequence_value:{
	 type: Number,
	 required: true 
});

const Counters = mongoose.model("Counters", CountersSchema);
export default Counters;
