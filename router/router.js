const express = require("express");
const app = require("../app");
const tokenFinds = require("../middelware/guard")
const router = express.Router();
const {getHome,getBlog,getProfile,getReister,getLogin, postRegister, loginAccess} = require("../controler/allRoutesControl")
const dataValidate = require("../middelware/dataValidate");
const {resgisterSchema, loninSchemas} = require("../model/validSchemas")
router.get("/", getHome)
router.get("/blog", tokenFinds, getBlog)
router.get("/profile", getProfile)
router.get("/register", getReister)
router.get("/login", getLogin)
router.post("/register",dataValidate(resgisterSchema) , postRegister)
router.post("/login",dataValidate(loninSchemas) , loginAccess)
router.get("/show", (req, res)=>{
    res.send(req.cookies.showToken)
})


module.exports = router;