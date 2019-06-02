import express from "express";
import expressGraphQL from "express-graphql";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import schema from "./graphql/";

import Counters from "./models/Counters";
const app = express();
const PORT = process.env.PORT || "4000";
const db = "mongodb://127.0.0.1:27017/test";



exports.getSequenceNumber= function (sequenceType){
Counter.findAndModify({ _id: sequenceType }, [], { $inc: { next: 1 } }, {}, function (err, counter) {
  if (err) throw err;
  console.log('updated, counter is ' + counter.next);
});
}



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

app.use(
  "/graphql",
  cors(),
  bodyParser.json(),
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





