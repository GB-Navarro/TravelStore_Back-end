import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.get("/", (req,res) => {
    res.send("Hello World!");
})

app.post("/test", (req,res) => {
    let data = req.body;
    res.status(200).send(data);
})
app.listen(process.env.PORT);







