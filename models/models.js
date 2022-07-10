import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import bcrypt from "bcrypt"
import createUserToken from "./../functions/createUserToken.js"

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
  registrationData.password = bcrypt.hashSync(registrationData.password, 10);
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

export async function checkUserPassword(password,email){
  let searchedUser = await db.collection("users").findOne({email: email});
  let isPasswordEqual = bcrypt.compareSync(password, searchedUser.password);
  let isPasswordValid;
  if(isPasswordEqual){
    isPasswordValid = true;
    return isPasswordValid;
  }else{
    isPasswordValid = false;
    return isPasswordValid;
  }
}

export async function checkIfUserHaveAnActiveSession(email){
  let userHaveAnActiveSession;
  let searchResult = await db.collection("sessions").findOne({email: email});
  if(searchResult === null){
    userHaveAnActiveSession = false;
    return userHaveAnActiveSession;
  }else{
    userHaveAnActiveSession = true;
    return userHaveAnActiveSession;
  }
}
export async function createUserSession(userData){
  let isSessionCreated;
  let sessionId = await getSessionId();
  let token = createUserToken(await sessionId);
  let sessionData = {
    sessionId: (sessionId+1),
    email:  userData,
    token:  token
  }
  let request = await db.collection("sessions").insertOne(sessionData);
  if(request.acknowledged){
    isSessionCreated = true;
    return token;
  }else{
    isSessionCreated = false;
    return undefined;
  }
}

export async function getSessionId(){
  let sessionsArray = await db.collection("sessions").find().toArray();
  let userId = await sessionsArray.length;
  return userId;
}