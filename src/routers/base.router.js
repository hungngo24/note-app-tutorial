const express = require("express");
const router = express.Router();
const baseController = require("../app/controller/BaseController");

router.get("/", baseController.index);

module.exports = router;
