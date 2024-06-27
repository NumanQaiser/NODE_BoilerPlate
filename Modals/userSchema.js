const mongo = require("mongoose");
const schema = mongo.Schema;

const User = schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlenght: 5,
      maxlength: 25,
      trim: true,
    },
    user_token: {
      type: String,
    },
    auth_token: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const USER = mongo.model("users", User);

module.exports = USER;
