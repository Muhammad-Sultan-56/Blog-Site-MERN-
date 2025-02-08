const bcrypt = require("bcrypt");
require("dotenv").config();
const UserModal = require("../models/User");
const jwt = require("jsonwebtoken");
//================== User Signup ==============//
const signup = async (req, res) => {
  try {
    const data = req.body;

    //============ check email is already exist
    const chekEmail = await UserModal.findOne({ email: data.email });
    if (chekEmail != null) {
      return res.status(400).json({
        status: "Fail",
        error: "Email is Already Registered",
      });
    }

    // =============== password hashing
    // hash the password
    const hashed = bcrypt.hashSync(data.password, 10);

    const signupUser = await UserModal.create({
      name: data.name,
      email: data.email,
      password: hashed,
      image: req.file.filename,
    });

    return res.json({
      status: "Ok",
      message: "User signup successfully",
      user: signupUser,
    });
  } catch (err) {
    console.log(err);

    if (err.name === "ValidationError") {
      const errors = Object.entries(err.errors).map(([field, error]) => ({
        field,
        message: error.message,
      }));

      return res.status(400).json({
        status: "Fail",
        errors: errors,
      });
    } else {
      console.error("Unexpected error:", err);
    }
  }
};

const login = async (req, res) => {
  try {
    const data = req.body;

    // check user registered or not
    const user = await UserModal.findOne({ email: data.email });

    if (user === null) {
      return res.status(400).json({
        status: "Fail",
        message: "Email is not Registered",
      });
    }

    // verify the password
    const passwordStatus = bcrypt.compareSync(data.password, user.password);

    if (passwordStatus === false) {
      return res.status(400).json({
        status: "Fail",
        message: "Password is not Correct",
      });
    }

    // genereate jwt token
    const token = jwt.sign({ id: user._id }, process.env.JWT_KEY);

    return res.status(201).json({
      status: "Ok",
      message: "User Login Successfull",
      token: token,
    });
  } catch (err) {
    console.log(err);

    if (err.name === "ValidationError") {
      const errors = Object.entries(err.errors).map(([field, error]) => ({
        field,
        message: error.message,
      }));

      return res.status(400).json({
        status: "Fail",
        errors: errors,
      });
    } else {
      console.error("Unexpected error:", err);
    }
  }
};

module.exports = { signup, login };
