const mongoose = require("mongoose");

function HandleError(error, req, res, next) {
  console.error(error.message);
  if (error instanceof mongoose.Error) {
    res.status(422).json(error);
  } else {
    res.status(400).json(error);
  }
}

module.exports = HandleError;
