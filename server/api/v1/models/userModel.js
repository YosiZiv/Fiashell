const mongoose = require("mongoose");

const { Schema } = mongoose;

//  Create Schema
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 30,
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 30,
  },
  phone: {
    type: String,
    required: true,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    maxlength: 256,
  },
  confirmed: {
    type: Boolean,
    required: true,
    default: false,
  },
  customers: {
    required: true,
    type: [Schema.Types.ObjectId],
    ref: "Customer",
    default: [],
  },
  products: {
    required: true,
    type: [Schema.Types.ObjectId],
    ref: "Product",
    default: [],
  },
  isDelete: {
    required: true,
    type: Boolean,
    default: false,
  },
  createAt: {
    required: true,
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
