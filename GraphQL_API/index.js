import express from "express";
import expressGraphQL from "express-graphql";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import schema from "./graphql/";

import Measurement from "./models/Measurement";
const app = express();
const PORT = process.env.PORT || "4000";
//const db = "mongodb://sa:adminKennwort1@40.89.134.226:27017";
//const db = "mongodb://40.89.134.226:27017";
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
//console.log(Measurement.find());
//Measurement.find({DeviceID: 1},function (err, docs) 
//{
//console.log(docs);
//console.log("______");
//console.log(err);
//});
//console.log(schema);
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





