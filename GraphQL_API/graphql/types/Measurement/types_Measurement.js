export default `

  type Measurement {
    _id: ID!  
    DeviceID: ID!
    Timestamp: String!
    Temperature: Float
    Humidity: Float
    Brightness: Float
  }
  type Query {
    measurementQuery(DeviceID: ID!, startDate: String, endDate: String): [Measurement]
    
  }
  type Mutation {
  addMeasurement(DeviceID: ID!, Timestamp: String!, Temperature: Float, Humidity: Float, Brightness: Float): Measurement
  }
  type Subscription {
    measurementAdded(DeviceID: ID!, Temperature: Float!): Measurement
  }
`;
