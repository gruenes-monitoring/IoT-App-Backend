// import the Device Schema 
import Device from "../../../models/Device";

export default {
  Query: {
    deviceQuery: (root, args) => {   
      return new Promise((resolve, reject) => {
        Device.find(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  },
  Mutation: {
    addDevice: (root, { Description, Country, City, Address, Building, Floor, Room, Latitude, Longitude, Active }) => {
      const newDevice = new Device({ Description, Country, City, Address, Building, Floor, Room, Latitude, Longitude, Active });
      return new Promise((resolve, reject) => {
        newDevice.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }

};

