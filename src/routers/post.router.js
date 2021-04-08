const express = require("express");
const router = express.Router();
const postController = require("../app/controller/PostController");

router.get("/", postController.index);
router.post("/store", postController.store);
router.put("/:id", postController.update);
router.get("/:id", postController.show);
router.delete("/:id", postController.destroy);

module.exports = router;
