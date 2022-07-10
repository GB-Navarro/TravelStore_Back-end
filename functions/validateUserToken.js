import { checkToken } from "../models/models.js";

export default async function validateUserToken(token){
    let isTokenValid;
    let tokenExists = await checkToken(token);
    if(tokenExists){
        isTokenValid = true;
        return isTokenValid;
    }else{
        isTokenValid = false;
        return isTokenValid;
    }
}