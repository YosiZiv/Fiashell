const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models/index");
const { SECRET, TOKEN_EXPIRES } = require("../../../config/env");
const { loginValidation } = require("../../../core/validations/auth");
exports.createSession = async (req, res) => {
  const errors = loginValidation(req.body);
  if (Object.keys(errors).length) {
    console.log(errors);
    return res.status(400).json({ errors });
  }
  const {
    body: { email, password },
  } = req;
  const user = await User.findOne({ email });
  //  check for user
  if (!user) {
    errors.authorization = "email or password incorrect";
    return res.status(401).json({ errors });
  }
  bcrypt
    .compare(password, user.password)
    .then((isMatch) => {
      if (!isMatch) {
        errors.authorization = "email or password incorrect";
        return res.status(401).json({ errors });
      }
      return jwt.sign(
        { ...user },
        SECRET,
        { expiresIn: TOKEN_EXPIRES },
        (err, token) => {
          return res.json({
            token: `Bearer ${token}`,
            user: { name: user.name, email: user.email },
            expiresIn: 7,
          });
        }
      );
    })
    .catch(() => {
      errors.catch = "Something went wrong :/";
      return res.status(500).json({ errors });
    });
};
