const mongoose = require("mongoose");

const dataScmemas = new mongoose.Schema({
    Fname : {
        type : String,
        required : true
    },
    Lname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})


module.exports =  mongoose.model("registerUser", dataScmemas);

