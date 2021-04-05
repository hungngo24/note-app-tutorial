const express = require("express");
const router = express.Router();
const UserModel = require("../app/models/UserModel");
const authController = require("../app/controller/AuthController");

router.get("/", authController.index);

router.post("/register", authController.store);
router.post("/login", authController.login);

module.exports = router;
