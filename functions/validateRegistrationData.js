import { registrationDataSchema } from "./../schemas/schemas.js"
import { checkNameExistence, checkEmailExistence }  from "./../models/models.js"

export default async function validateRegistrationData(registrationData){
    let schemaValidationWasSuccessful = validateRegistrationDataFormat(registrationData);
    let isPasswordsEqual = checkPasswordsEquality(registrationData.password, registrationData.confirmedPassword)
    let thisNameExists = await checkNameExistence(registrationData.name);
    let thisEmailExists = await checkEmailExistence(registrationData.email);
    let isRegistrationDataValid;
    if(schemaValidationWasSuccessful && isPasswordsEqual && !(thisNameExists) && !(thisEmailExists)){
        isRegistrationDataValid = true;
        return isRegistrationDataValid;
    }else{
        isRegistrationDataValid = false;
        return isRegistrationDataValid;
    }
}

function validateRegistrationDataFormat(registrationData){
    let schemaValidationWasSuccessful;
    if((registrationDataSchema.validate(registrationData).error) === undefined){
        schemaValidationWasSuccessful = true;
        return schemaValidationWasSuccessful;
    }else{
        schemaValidationWasSuccessful = false;
        return schemaValidationWasSuccessful;
    }
}

function checkPasswordsEquality(password, confirmedPassword){
    let isPasswordsEqual;
    if(password === confirmedPassword){
        isPasswordsEqual = true;
        return isPasswordsEqual;
    }else{
        isPasswordsEqual = false;
        return isPasswordsEqual;
    }
}