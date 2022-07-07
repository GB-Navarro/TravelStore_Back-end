import express from "express";
import router from "./routes/authRoutes.js"
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(process.env.PORT);








