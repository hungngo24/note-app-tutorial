const express = require("express");
const router = express.Router();
const postController = require("../app/controller/PostController");

router.post("/store", postController.store);

module.exports = router;
