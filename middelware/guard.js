const express = require("express");
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser())
require("dotenv").config();
const tokenFinds = async (req,res,next)=>{
    try{
        const tokens = await req.cookies.showToken;
        const datas = jwt.verify(tokens, process.env.secrateCode);
        next();
    }catch(err){
        res.redirect("/login")
        console.log(err)
    }
}

module.exports = tokenFinds