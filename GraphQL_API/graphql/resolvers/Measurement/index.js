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
    addMeasurement: (root, {DeviceID, Timestamp, Temperature, Humidity, Brightness	}) => {
		 var tmp= require("../../../index");
         var getID=tmp.getSequenceNumber;
         getID("mid",function(id){
			var MeasurementID=id;
			const newMeasurement= new Measurement({MeasurementID,DeviceID, Timestamp, Temperature, Humidity, Brightness});
			return new Promise((resolve, reject) => {
				newMeasurement.save((err, res) => {
				err ? reject(err) : resolve(res);
				});
			});
		});
    }
  },
  Subscription: {
	   measurementQuery: (root, args) => {
	return new Promise((resolve, reject) => {
        Measurement.find(args).exec((err, res) => {	
         err ? reject(err) : resolve(res);
        });
      });
    }
	  
  }
  
};

