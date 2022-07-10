export async function profile(req,res){
    console.log(req);
    res.send("Profile!");
}

export async function history(req,res){
    console.log(req);
    res.send("History!")
}