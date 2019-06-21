// import the Device Schema 
import Device from "../../../models/Device";

export default {
  Query: {
    deviceQuery: (root, args) => { 
      console.log("deviceQuery "+args+" ",Date.now());
      return new Promise((resolve, reject) => {
        Device.find(args).exec((err, res) => {
          if (err!=null) console.error("deviceQuery Error "+err+" "+Date.now());
          else console.log("deviceQuery res "+res+" "+Date.now());
          err ? reject(err) : resolve(res);
        });
      });
    }
  },
  Mutation: {
    addDevice: (root, { Description, Country, City, Address, Building, Floor, Room, Latitude, Longitude, Active }) => {
      console.log("addDeive "+Date.now());
      const newDevice = new Device({ Description, Country, City, Address, Building, Floor, Room, Latitude, Longitude, Active });
      return new Promise((resolve, reject) => {     
        newDevice.save((err, res) => {
          if (err!=null) console.error("addDevice Error "+err+" "+Date.now());
          else console.log("addDevice res "+res+" "+Date.now());
          err ? reject(err) : resolve(res);
        });
      });
    }
  }

};

