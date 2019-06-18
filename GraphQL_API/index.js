import express from 'express';
import {
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import schema  from './graphql/schema';
import { execute, subscribe } from 'graphql';
import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import mongoose from "mongoose";

const db = "mongodb://127.0.0.1:27017/test";
const ip= "40.89.134.226";

// Connect to MongoDB with Mongoose.
mongoose
  .connect(
    db,
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const PORT = 4000;
const server = express();

server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
subscriptionsEndpoint: `ws://${ip}:${PORT}/subscriptions`
}));

// We wrap the express server so that we can attach the WebSocket for subscriptions
const ws = createServer(server);

ws.listen(PORT, () => {
  console.log(`GraphQL Server is now running on http://${ip}:${PORT}`);

  // Set up the WebSocket for handling GraphQL subscriptions
  new SubscriptionServer({
    execute,
    subscribe,
    schema
  }, {
      server: ws,
      path: '/subscriptions',
    });
});
