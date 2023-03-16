const express = require("express");
const app = require("../app");
const router = express.Router();
const {getHome,getBlog,getProfile,getReister,getLogin, postRegister, loginAccess} = require("../controler/allRoutesControl")
const dataValidate = require("../middelware/dataValidate");
const {resgisterSchema, loninSchemas} = require("../model/validSchemas")
router.get("/", getHome)
router.get("/blog", getBlog)
router.get("/profile", getProfile)
router.get("/register", getReister)
router.get("/login", getLogin)
router.post("/register",dataValidate(resgisterSchema) , postRegister)
router.post("/login",dataValidate(loninSchemas) , loginAccess)



module.exports = router;