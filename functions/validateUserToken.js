import { checkToken } from "../models/models.js";

export default async function validateUserToken(token){
    let tokenWithoutBearer = getTokenWithoutBearer(token);
    let isTokenValid;
    let tokenExists = await checkToken(tokenWithoutBearer);
    if(tokenExists){
        isTokenValid = true;
        return isTokenValid;
    }else{
        isTokenValid = false;
        return isTokenValid;
    }
}

function getTokenWithoutBearer(token){
    let tokenWithoutBearer = "";
    for(let i = 7; i < token.length; i++){
        tokenWithoutBearer += token[i];
    }
    return tokenWithoutBearer;
}