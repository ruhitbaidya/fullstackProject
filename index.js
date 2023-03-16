const mongoose = require('mongoose');
require("dotenv").config();
const app = require("./app")
const port = process.env.prort;
const DBConn = process.env.DBConnection;

const DB_Conncectd = async ()=>{
    try{
        mongoose.connect(DBConn)
        .then(()=>console.log("db is connected"))
        .catch((err)=>console.log(err.message))
    }
    catch(err){
        console.log(err.message)
    }
}



app.listen(port, async ()=>{
    await DB_Conncectd();
    console.log("server is start")
})