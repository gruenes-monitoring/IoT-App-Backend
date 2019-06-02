// The User schema.
import Measurement from "../../../models/Measurement";
import Counters from "../../../models/Counters";



function getNextSequenceValue(){
   var sequenceDocument = Counters.findAndModify({
      query:{_id: "mid" },
      update: {$inc:{sequence_value:1}},
      new:true
   });
   return sequenceDocument.sequence_value;
}

export default {
  Query: {
    measurementQuery: (root, args) => {
	return new Promise((resolve, reject) => {
        Measurement.find(args).exec((err, res) => {	
         err ? reject(err) : resolve(res);
        });
      });
    }
  },
  Mutation: {
    addMeasurement: (root, { MeasurementID,DeviceID, Timestamp, Temperature, Humidity, Brightness	}) => {
      const newMeasurement= new Measurement({ MeasurementID,DeviceID, Timestamp, Temperature, Humidity, Brightness});
		//console.log(getNextSequenceValue());
      return new Promise((resolve, reject) => {
        newMeasurement.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};

