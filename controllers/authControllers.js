import validateRegistrationData from "../functions/validateRegistrationData.js";
import { createUser } from "../models/models.js";

export async function signUp(req,res){
    let registrationData = req.body;
    let isRegistrationDataValid = await validateRegistrationData(registrationData);
    if(isRegistrationDataValid){
        let isUserCreated = await createUser(registrationData);
        if(isUserCreated){
            res.send("User is created").status(201);
        }else{
            res.send("A error has been ocurred").status(422);
        }
    }else{
        res.send("A error has been ocurred").status(422);
    }
}

export async function signIn(req, res){
    //res.send("SignIn").status(200);
}