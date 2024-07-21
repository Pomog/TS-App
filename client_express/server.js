import express from "express";
import session from "express-session";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";
import axios from "axios";


import categories from "./category_setup.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));



app.get("/",async (req,res)=>{
    res.status(200).render("select_page.ejs")
})
app.get("/new_teacher_setup", async (req,res)=>{
    res.status(200).render("new_teacher_setup.ejs",{categories})
})


app.listen(PORT, (err)=>{
    if(err) throw err;
    console.log("Proxy server is running on port: ",PORT);
})