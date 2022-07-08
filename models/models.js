import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;
mongoClient.connect().then(() => {
  db = mongoClient.db("travelStore");
});

export async function checkNameExistence(name){
  let searchResult = await db.collection("users").findOne({name: name});
  let nameExists;
  if(searchResult === null){
    nameExists = false;
    return nameExists;
  }else{
    nameExists = true;
    return nameExists;
  }
}

export async function checkEmailExistence(email){
  let searchResult = await db.collection("users").findOne({email: email});
  let emailExists;
  if(searchResult === null){
    emailExists = false;
    return emailExists;
  }else{
    emailExists = true;
    return emailExists;
  }
}

export async function createUser(registrationData){
  let request = await db.collection("users").insertOne(registrationData);
  let userIsCreated;
  if(request.acknowledged){
    userIsCreated = true;
    return userIsCreated;
  }else{
    userIsCreated = false;
    return userIsCreated;
  }
}