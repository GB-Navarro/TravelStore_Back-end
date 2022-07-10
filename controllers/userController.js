import validateUserToken from "../functions/validateUserToken.js";

export async function profile(req,res){
    //recebe o email do usuário e um token
    //valida o token nas sessões ativas
    //retorna nome do usuário, e um array contendo as próximas viagens do usuário (a partir de hoje)
    //o array das próximas viagens, deve conter a data, nome da cidade e país da cidade
    /*
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    */
    validateUserToken(req.headers.authorization);
    res.sendStatus(200);
}

export async function history(req,res){
    console.log(req);
    res.send("History!")
}