const getHome =(req, res)=>{res.render("home", {title : "Home"})}
const getBlog =(req, res)=>{res.render("bloge", {title : "Blog"})}
const getProfile =(req, res)=>{res.render("profile", {title : "Profile"})}
const getReister =(req, res)=>{res.render("register", {title : "Register"})}
const getLogin =(req, res)=>{res.render("login", {title : "Login"})}
// const getHome =(req, res)=>{res.render("home", {title : "Home"})}


    module.exports = {
        getHome,
        getBlog,
        getProfile,
        getReister,
        getLogin
    }