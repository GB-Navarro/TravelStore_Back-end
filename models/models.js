import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;
mongoClient.connect().then(() => {
  db = mongoClient.db("travelStore");
});

export async function testDB(req, res){
  let data = req.body
  try{
    let promisse = await db.collection("test").insertOne(data)
    console.log("Ok!", await promisse);
  }catch(error){
    console.log("Error!", error)
  }
}

