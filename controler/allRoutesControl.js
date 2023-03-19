const bcrypt = require('bcrypt');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const modelAddingData = require("../model/databaseSchemas")
require("dotenv").config()
const tokensfind = process.env.secrateCode;
const getHome =(req, res)=>{res.render("home", {title : "Home"})}
const getBlog =(req, res)=>{res.render("bloge", {title : "Blog"})}
const getProfile =(req, res)=>{res.render("profile", {title : "Profile"})}
const getReister =(req, res)=>{res.render("register", {title : "Register"})}
const getLogin =(req, res)=>{
    res.render("login", {title : "Login"})
    res.send(req.cookies.showToken)
}
const postRegister = async (req, res)=>{
    const dataMatch = await modelAddingData.find({email : req.body.email});
    if(dataMatch && dataMatch.length>0){
        res.send("this email already exist")
    }else{
        const hashPass = await bcrypt.hash(req.body.password, 10);
    const addingData = modelAddingData({
        Fname : req.body.Fname,
        Lname : req.body.Lname,
        email : req.body.email,
        password : hashPass
    })
    const dataStore = await addingData.save();
    res.send("User Create Successfully");
    }
}
const loginAccess = async (req, res)=>{
    const findData = await modelAddingData.findOne({email : req.body.email})
    if(findData){
        const isvalidPass = await bcrypt.compare(req.body.password, findData.password)
        if(isvalidPass){
            const token = jwt.sign({ 
                userName : findData.Fname,
                id : findData._id 
            }, tokensfind, {
                expiresIn : "1h"
            });
            res.cookie("showToken" , token)
            res.send("login successfully")
        }else{
            res.send("authontaction failed!")
        }
    }else{
        res.send("authontaction failed!")
    }
    // res.send(findData);   
}

    module.exports = {
        getHome,
        getBlog,
        getProfile,
        getReister,
        getLogin,
        postRegister,
        loginAccess
    }