// import Measurement Schema 
import Measurement from "../../../models/Measurement";
import { PubSub, withFilter } from 'graphql-subscriptions';
const pubsub = new PubSub(); //create a PubSub instance
const TOPIC ='newMeasurement';

export default {
  Query: {
	  
    measurementQuery: (root, args) => {
	    // Variablen fuer Querys die das Datum benutzen
      let after = false;
      let before = false;
      let endDate;
      let startDate;

      // Wenn ein Startdatum angegeben ist, Datum zwischenspeichern und aus den Argumenten loeschen
      if (args.startDate != null) {
        after = true;
        startDate = args.startDate;
        delete args.startDate;
      }

      // Wenn ein Enddatum angegeben ist, Datum zwischenspeichern und aus den Argumenten loeschen
      if (args.endDate != null) {
        before = true;
        endDate = args.endDate;
        delete args.endDate;
      }


      return new Promise((resolve, reject) => {
        Measurement.find(args).exec((err, res) => {

          // Loesch alle Ergebnisse raus, die das Startdatum unterschreiten bzw. das Enddatum ueberschreite
          if (after) {
            for (let i = 0; i < res.length; i++) {
              if (res[i].Timestamp < startDate) {
                delete res[i];
              }
            }
          }
          if (before) {
            for (let i = 0; i < res.length; i++) {
              if (res[i] != undefined && res[i].Timestamp > endDate) delete res[i];
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
      pubsub.publish(TOPIC, { measurementAdded: newMeasurement, DeviceID: DeviceID });
      return new Promise((resolve, reject) => {
        newMeasurement.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  },
  Subscription: {
	  measurementAdded: {  // create a channelAdded subscription resolver function.
	subscribe: withFilter(
       () => pubsub.asyncIterator(TOPIC),
	(payload, variables) => {
		return payload.DeviceID === variables.DeviceID;
    }
	)
  }
	 }
};

