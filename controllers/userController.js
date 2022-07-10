import validateUserToken from "../functions/validateUserToken.js";
import getUserNextTrips from "../functions/getUserNextTrips.js"
import { getUserName, getUserTrips } from "../models/models.js";

export async function profile(req,res){
    let userEmail = req.body.email;
    if(validateUserToken(req.headers.authorization)){
        let userName = await getUserName(userEmail);
        let userTrips = await getUserTrips(userEmail);
        let userNextTrips = await getUserNextTrips(userTrips);
        let userData = {
            name: userName,
            nextTrips: userNextTrips
        }
        res.send(userData).status(200);
    }   
}

export async function history(req,res){
    console.log(req);
    res.send("History!")
}