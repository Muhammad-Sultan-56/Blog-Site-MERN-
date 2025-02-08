const token_key = "kjhkh7897biuw43*993#jjsdjhhs43dfger4345";
const jwt = require("jsonwebtoken");

const AuthCheck = (req, res, next) => {
  try {
    const authorizated = req.header("Authorization");

    // check header is set or not
    if (!authorizated) {
      res.status(403).json({
        status: "Failed",
        message: "You are not Authorized",
      });
    }

    // check token is set or not
    const token = authorizated.split(" ")[1];
    if (!token) {
      res.status(403).json({
        status: "Failed",
        message: "Token is not Set",
      });
    }

    // verify token is correct

    const encoded = jwt.verify(token, token_key);
    req.userId = encoded.id;

    next();
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "Failed",
      message: "Authorization Failed",
    });
  }
};

module.exports = AuthCheck;
