const firebase = require("firebase");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const register = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(({ user }) => {
      res.json("Account successfully created ");
    })
    .catch((err) => {
      res.json(err);
    });
};

const login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
    //   console.log("user", user);
      const payload = {
        email,
      };

      const options = {
        expiresIn: process.env.TOKEN_EXPIRATION,
      };
      
      const token = jwt.sign(payload, process.env.SECRET, options);
      res.json(token);
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === "auth/wrong-password") {
        res.json("Wrong password.");
      } else {
        res.json(errorMessage);
      }
    });
};
module.exports = { register, login };
