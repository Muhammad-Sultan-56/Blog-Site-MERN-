const { signup, login } = require("../controllers/UserController");
const express = require("express");
const userRoute = express.Router();

const upload = require("../helpers/ImageUpload");

userRoute.post("/signup", upload.single("image"), signup);

userRoute.post("/login", login);

module.exports = userRoute;
