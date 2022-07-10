import validateUserToken from "../functions/validateUserToken.js";
import getUserNextTrips from "../functions/getUserNextTrips.js"
import getUserPastTrips from "../functions/getUserPastTrips.js"
import { getUserName, getUserTrips } from "../models/models.js";

export async function profile(req,res){
    let userEmail = req.body.email;
    if(validateUserToken(req.headers.authorization)){
        let userName = await getUserName(userEmail);
        let userTrips = await getUserTrips(userEmail);
        if(userTrips.length > 0){
            let userNextTrips = await getUserNextTrips(userTrips);
            let userData = {
                name: userName,
                nextTrips: userNextTrips
            }
            res.send(userData).status(200);
        }else{
            let userData = {
                name: userName,
                nextTrips: []
            }
            res.send(userData).status(200);
        }
        
    }   
}

export async function history(req,res){
    let userEmail = req.body.email;
    if(validateUserToken(req.headers.authorization)){
        let userTrips = await getUserTrips(userEmail);
        if(userTrips.length > 0){
            let userPastTrips= await getUserPastTrips(userTrips);
            res.send(userPastTrips).status(200);
        }else{
            res.send([]).status(200);
        }
        
        
    }
}