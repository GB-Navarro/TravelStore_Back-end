import { userDataSchema } from "../schemas/schemas.js";

export default function validateUserDataFormat(userData){
    let schemaValidationWasSuccessfull;
    if(userDataSchema.validate(userData).error === undefined){
        schemaValidationWasSuccessfull = true;
        return schemaValidationWasSuccessfull;
    }else{
        schemaValidationWasSuccessfull = false;
        return schemaValidationWasSuccessfull;
    }
}