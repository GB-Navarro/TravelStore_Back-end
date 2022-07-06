import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { testDB } from "./models/models.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.get("/", (req,res) => {
    res.send("Hello World!");
})

app.post("/test", testDB)
app.listen(process.env.PORT);







