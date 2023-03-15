const express = require("express");
const app = require("../app");
const router = express.Router();
const {getHome,getBlog,getProfile,getReister,getLogin} = require("../controler/allRoutesControl")

router.get("/", getHome)
router.get("/blog", getBlog)
router.get("/profile", getProfile)
router.get("/register", getReister)
router.get("/login", getLogin)
router.post("/register", getLogin)



module.exports = router;