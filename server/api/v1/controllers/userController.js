const { User } = require("../models/index");
const bcrypt = require("bcryptjs");
const { createUserValidation } = require("../../../core/validations/auth");

exports.createUser = async (req, res) => {
  const { body } = req;
  const errors = createUserValidation(body);
  if (Object.keys(errors).length) {
    console.log(errors);
    return res.status(400).json({ errors });
  }
  const newUser = await new User({ ...body });
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, async (e, hash) => {
      if (e) {
        errors.bcrypt = `something went wrong here :/`;
        return res.status(400).json({ errors });
      }
      newUser.password = hash;
      newUser
        .save()
        .then((createdUser) => {
          return res
            .status(200)
            .json({ msg: `User Created Successfully`, createdUser });
        })
        .catch((e) => {
          if (e.code === 11000) {
            errors.Email = `Have To be Unique`;
            return res.status(400).json({ errors });
          }
          errors.createUser = e;
          return res.status(500).json(e);
        });
    });
  });
};
