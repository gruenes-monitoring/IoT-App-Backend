export default `
  type Device {
    _id: ID!
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
    deviceQuery( _id: ID, Country: String, City: String, Address: String, 
	Building: String, Floor: Int, Room: String, Latitude: String, Longitude: String, Active: Boolean): [Device]
    
  }
  type Mutation {
  addDevice(Country: String!, City: String!, Address: String!, Description: String,
	Building: String, Floor: Int, Room: String!, Latitude: String, longitude: String, Active: Boolean!): Device
  }
`;
