const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    required: [true, "User role is required"],
    default: "user",
  },
  image: {
    type: String,
    default: "avatar.jpg",
  },
});

const UserModal = mongoose.model("User", UserSchema);

module.exports = UserModal;
