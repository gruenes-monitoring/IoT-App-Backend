import express from 'express';
import {
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { schema } from "./graphql/schema";
import { execute, subscribe } from 'graphql';
import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import mongoose from "mongoose";

const server = express();
const PORT = process.env.PORT || "4000";
const db = "mongodb://127.0.0.1:27017/test";

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

  
  server.use('*', cors({ origin: 'http://localhost:3000' }));
  server.use('/graphql', bodyParser.json(), graphqlExpress({
    schema
  }));
  
  server.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
    subscriptionsEndpoint: `ws://localhost:${PORT}/subscriptions`
  }));
  
  // We wrap the express server so that we can attach the WebSocket for subscriptions
  const ws = createServer(server);
  
  ws.listen(PORT, () => {
    console.log(`GraphQL Server is now running on http://localhost:${PORT}`);
  
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