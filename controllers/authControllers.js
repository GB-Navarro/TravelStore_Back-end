import validateRegistrationData from "../functions/validateRegistrationData.js";
import validateUserData from "../functions/validateUserData.js"
import { createUser, checkEmailExistence, checkUserPassword, createUserSession, checkIfUserHaveAnActiveSession } from "../models/models.js";

export async function signUp(req,res){
    let registrationData = req.body;
    let isRegistrationDataValid = await validateRegistrationData(registrationData);
    if(isRegistrationDataValid){
        registrationData.trips = [];
        let isUserCreated = await createUser(registrationData);
        if(isUserCreated){
            res.send("User is created").status(201);
        }else{
            res.send("An error has been ocurred").status(422);
        }
    }else{
        res.send("An error has been ocurred").status(422);
    }
}

export async function signIn(req, res){
    let userData = req.body;
    let isUserDataValid = validateUserData(userData);
    let userEmailExists = await checkEmailExistence(userData.email);
    let userPasswordIsValid = await checkUserPassword(userData.password, userData.email);
    let userHaveAnActiveSession = await checkIfUserHaveAnActiveSession(userData.email);
    //Alterar aqui, primeiro validar o userdata, dps o useremail, dps o userpassword e dps a verificação de sessão ativa (medida de segurança)
    if(isUserDataValid && userEmailExists && userPasswordIsValid && !(userHaveAnActiveSession)){
        let userToken = await createUserSession(userData.email);
        if(userToken != undefined){
            res.send(userToken).status(200);
        }else{
            res.send("An error has ocurred").send(422);
        }
    }else{
        res.sendStatus(404);
    }
}