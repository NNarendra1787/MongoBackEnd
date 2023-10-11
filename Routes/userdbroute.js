const { RegisterUser, LoginUser } = require("../DatabaseController/UserCont");

const userdbroute = require("express").Router();

userdbroute.post("/register", RegisterUser)
userdbroute.post("/login", LoginUser)

module.exports = userdbroute