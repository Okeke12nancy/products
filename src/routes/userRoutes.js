const express = require("express");
const { registerUser, getUsers } = require("../controller/userController");

const userRoutes = express.Router();

userRoutes.post("/register", registerUser);
userRoutes.get("/", getUsers);

module.exports = userRoutes;
