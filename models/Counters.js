import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Create the User Schema.
const CountersSchema = new Schema({
  pid: {
    type: String,
    required: true,
    unique: true
  },
 sequence_value:{
	 type: Number,
	 required: true 
});

Counters.statics.findAndModify = function (query, sort, doc, options, callback) {
  return this.collection.findAndModify(query, sort, doc, options, callback);
};

const Counters = mongoose.model("Counters", CountersSchema);
export default Counters;
