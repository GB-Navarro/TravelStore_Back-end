import { MongoClient } from "mongodb";
import dotenv from "dotenv";

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;
mongoClient.connect().then(() => {
  db = mongoClient.db("travelStore");
});

export async function testDB(data){
  try{
    let promisse = await db.collections("test").insertOne(data)
    console.log("Ok!",promisse);
  }catch(error){
    console.log("Error!", error)
  }
}

dotenv.config();