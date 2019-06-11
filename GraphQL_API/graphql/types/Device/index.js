export default `
  type Device {
    DeviceID: Int!
    Description: String
    Country: String!
	City: String!
	Address: String!
	Building: String
	Floor: Int  
	Room: String!
	Latitude: String
	Longitude: String
	Active: Boolean!
  }
  type Query {
    deviceQuery(DeviceID: Int, Country: String, City: String, Address: String, 
	Buliding: String, Floor: Int, Room: String, Latitude: String, Longitude: String, Active: Boolean): [Device]
    
  }
  type Mutation {
  addDevice(Country: String!, City: String!, Address: String!, Description: String,
	Buliding: String, Floor: Int, Room: String!, Latitude: String, longitude: String, Active: Boolean!): Device
  }
`;
