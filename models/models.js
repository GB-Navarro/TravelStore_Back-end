import { MongoClient } from "mongodb";
import dotenv from "dotenv";

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;
mongoClient.connect().then(() => {
  db = mongoClient.db("travelStore");
});



dotenv.config();