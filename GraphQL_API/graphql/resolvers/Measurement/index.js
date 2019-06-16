// import Measurement Schema 
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
    addMeasurement: (root, { DeviceID, Timestamp, Temperature, Humidity, Brightness }) => {
      const newMeasurement = new Measurement({ DeviceID, Timestamp, Temperature, Humidity, Brightness });
      return new Promise((resolve, reject) => {
        newMeasurement.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }

};

