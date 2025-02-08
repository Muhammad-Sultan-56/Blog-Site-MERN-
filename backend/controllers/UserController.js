const bcrypt = require("bcrypt");

const UserModal = require("../models/User");
const token_key = "kjhkh7897biuw43*993#jjsdjhhs43dfger4345";
const jwt = require("jsonwebtoken");
//================== User Signup ==============//
const signup = async (req, res) => {
  try {
    const data = req.body;

    //============ check email is already exist
    const chekEmail = await UserModal.findOne({ email: data.email });
    if (chekEmail != null) {
      res.status(400).json({
        status: "Fail",
        message: "Email is Already Registered",
      });
    }

    // =============== password hashing

    const password = bcrypt.hashSync(data.password, 10);
    data.password = password;

    const signupUser = await UserModal.create(data);
    res.json({
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
    const token = jwt.sign({ id: user._id }, token_key);

    res.status(201).json({
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
