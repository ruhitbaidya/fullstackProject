const modelAddingData = require("../model/databaseSchemas")

const getHome =(req, res)=>{res.render("home", {title : "Home"})}
const getBlog =(req, res)=>{res.render("bloge", {title : "Blog"})}
const getProfile =(req, res)=>{res.render("profile", {title : "Profile"})}
const getReister =(req, res)=>{res.render("register", {title : "Register"})}
const getLogin =(req, res)=>{res.render("login", {title : "Login"})}

const Joi = require('joi');

const postRegister = async (req, res)=>{
    const addingData = modelAddingData(req.body)
    const dataStore = await addingData.save();
    res.send("User Create Successfully");
}
const loginAccess = async (req, res)=>{
    const findData = await modelAddingData.find({email : req.body.email})
    res.send(findData);   
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