const jwt = require('jsonwebtoken');
require("dotenv").config();
const cookieParser = require("cookie-parser");
const tokenssce = process.env.secrateCode
const tokenFinds = (req,res,next)=>{
    const token = req.cookie.shoeToken;
    const data = jwt.verify(token, tokenssce);
    if(data){
        next();
    }else{
        res.redirect("/login")
    }
}

module.exports = tokenFinds