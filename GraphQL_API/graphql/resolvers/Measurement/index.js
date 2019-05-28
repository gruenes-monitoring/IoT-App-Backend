// The User schema.
import Measurement from "../../../models/Measurement";
import getNextSequenceValue from "../../../index"
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
		console.log(getNextSequenceValue("mID");
      return new Promise((resolve, reject) => {
        newMeasurement.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};

