const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
const Routers = require("./router/router");
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use("/", Routers);

module.exports = app;