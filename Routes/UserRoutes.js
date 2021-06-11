const UserEndpoint = require("../Endpoints/UserEndpoint");
const router = require("express").Router();

//fetch all users
router.get("/", UserEndpoint.GetAllUsers);
//fetch user
router.get("/:id", UserEndpoint.GetUser);
//create new user
router.post("/", UserEndpoint.CreateUser);
//update user based on id
router.patch("/:id", UserEndpoint.UpdateUser);
//delete user
router.delete("/:id", UserEndpoint.DeleteUser);

module.exports = router;
