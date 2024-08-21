import express from "express";
import connectDB from "./db.js";
import dotenv from "dotenv";
import { configDotenv } from "dotenv";
import FacultiesRouter from "./router/Facultiesrouter.js";
// import FacultiesModel  from "./Schemas/Feculties.js";
const App = express();
dotenv.config()
connectDB()
App.use(express.json());

//middleware
const logrequest = (req, res, next) => {
    // console.log(req.body);
    console.log(req.method, req.url,req.originalUrl);
    next();
}
App.use(logrequest)


App.use("/Faculties",FacultiesRouter)
App.listen(3000, () => {
    console.log("server is running on port 3000");
})