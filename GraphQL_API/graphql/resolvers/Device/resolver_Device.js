// import the Device Schema 
import Device from "../../../models/Device";
import myLogger from "../../../index";
export default {
  Query: {
    deviceQuery: (root, args) => { 
      myLogger.warn("DEVICE");      
      myLogger.group();
      myLogger.log(new Date(Date.now())+" receive deviceQuery");
      return new Promise((resolve, reject) => {
        Device.find(args).exec((err, res) => {
          if (err!=null)  myLogger.error(new Date(Date.now())+" deviceQuery Error "+err);
          else  myLogger.log(new Date(Date.now())+" succesfully finished deviceQuery");
          myLogger.groupEnd();
          err ? reject(err) : resolve(res);
        });
      });
    }
  },
  Mutation: {
    addDevice: (root, { Description, Country, City, Address, Building, Floor, Room, Latitude, Longitude, Active }) => {
      myLogger.group();
      myLogger.warn("DEVICE");
      myLogger.log(new Date(Date.now())+" receive addDevice");
      const newDevice = new Device({ Description, Country, City, Address, Building, Floor, Room, Latitude, Longitude, Active });
      return new Promise((resolve, reject) => {     
        newDevice.save((err, res) => {
          if (err!=null)  myLogger.error(new Date(Date.now())+" addDevice Error");
          else  myLogger.log(new Date(Date.now())+" succesfully added Device");
          myLogger.groupEnd();
          err ? reject(err) : resolve(res);
        });
      });
    }
  }

};

