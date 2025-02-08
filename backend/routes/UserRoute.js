const { signup, login } = require("../controllers/UserController");
const express = require("express");
const userRoute = express.Router();

userRoute.post("/signup", signup);

userRoute.post("/login" , login)

module.exports = userRoute;
