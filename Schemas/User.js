const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "password must not be empty"],
      minlength: [3, "password must have at least 3 characters."],
      maxlength: [12, "password must not have more than 12 characters."],
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
    email_verify_token: String,
  },

  { timestamps: true }
);

const User = model("user", UserSchema);
module.exports = User;
