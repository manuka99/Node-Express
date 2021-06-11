const { sendSuccess } = require("../Common/Util");
const UserDau = require("../Dau/UserDau");

exports.GetAllUsers = async (req, res, next) => {
  UserDau.GetAllUsers()
    .then((data) => sendSuccess(res, data))
    .catch(next);
};

exports.GetUser = async (req, res, next) => {
  UserDau.GetUser(req.params.id)
    .then((data) => sendSuccess(res, data))
    .catch(next);
};

exports.CreateUser = async (req, res, next) => {
  UserDau.CreateUser(req.body)
    .then((data) => sendSuccess(res, data))
    .catch(next);
};

exports.UpdateUser = async (req, res, next) => {
  UserDau.UpdateUser(req.params.id, req.body)
    .then((data) => sendSuccess(res, data))
    .catch(next);
};

exports.DeleteUser = async (req, res, next) => {
  UserDau.GetUser(req.params.id)
    .then((data) => sendSuccess(res, data))
    .catch(next);
};
