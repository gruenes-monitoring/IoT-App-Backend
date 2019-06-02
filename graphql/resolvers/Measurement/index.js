// The User schema.
import Measurement from "../../../models/Measurement";


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
		
	 var tmp= require("../../../index");
	 var getID=tmp.getSequenceNumber;
	 console.log(getID("mid"));
		
      const newMeasurement= new Measurement({ MeasurementID,DeviceID, Timestamp, Temperature, Humidity, Brightness});
      return new Promise((resolve, reject) => {
        newMeasurement.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};

