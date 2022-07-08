import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export default function createUserToken(sessionId){
    const token = jwt.sign({sessionId: sessionId}, process.env.KEY);
    return token;
}