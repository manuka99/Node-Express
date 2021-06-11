const User = require("../Schemas/User");

exports.GetAllUsers = async () => {
  const users = await User.find();
  return users;
};

exports.GetUser = async (userID) => {
  const user = await User.findById(userID);
  return user;
};

exports.CreateUser = async (data) => {
  const { password, role } = data;
  var user = await User.create({ password, role });
  return user;
};

exports.UpdateUser = async (userID, data) => {
  const updatedUser = await User.findOneAndUpdate({ _id: userID }, data, {
    useFindAndModify: false,
  });
  return updatedUser;
};

exports.DeleteUser = async (userID) => {
  const deletedUser = await User.findOneAndDelete(userID);
  return deletedUser;
};
