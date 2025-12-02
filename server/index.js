import dotenv from 'dotenv';
dotenv.config();
import express from "express"
import cors from "cors"
import mongoose from 'mongoose'
import authRoute from './routes/authRoute.js'
import cookieParser from "cookie-parser"; 
import { cookie } from "express-validator";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import productRoute from "./routes/productRoute.js"

const PORT = process.env.PORT || 777;
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/dron_db"

const app = express()
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use(express.json({limit: "10mb"}));
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoute);
app.use("/product", productRoute);
app.use("/uploads", express.static("uploads"));
app.use(errorMiddleware)
async function start() {
    try{
        console.log("Подключение к MongoDB...");
        await mongoose.connect(MONGO_URL);
        console.log("Подключение к MongoDB установлено");
        
        app.listen(PORT, () => {
            console.clear();
            console.log(`Сервер запущен на порту ${PORT}`)
        });
    } catch (error) {
        console.error("Ошибка подключения:", error);
        process.exit(1);
    }
}

start();