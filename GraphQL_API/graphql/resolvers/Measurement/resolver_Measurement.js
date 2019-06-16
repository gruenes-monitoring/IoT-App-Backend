// import Measurement Schema 
import Measurement from "../../../models/Measurement";


export default {
  Query: {
    measurementQuery: (root, args) => {
      let after = false;
      let before = false;
      let endDate;
      let startDate;
      if (args.startDate != null) {
        after=true;
	startDate = args.startDate;     
        delete args.startDate;
      }
      if (args.endDate != null) {
        before = true;
        endDate = args.endDate;
        delete args.endDate;
      }

      return new Promise((resolve, reject) => {
	      Measurement.find(args).exec((err, res) => {
          if (after) {  
            for (let i = 0; i < res.length; i++) {
	      if (res[i].Timestamp < startDate){
		      delete res[i];
	      }
	
            }
          }
          if (before) {
            for (let i = 0; i < res.length; i++) {
              if (res[i]!=undefined && res[i].Timestamp > endDate) delete res[i];
            }
          }
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

