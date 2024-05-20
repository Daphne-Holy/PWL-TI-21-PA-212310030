const express = require("express");
const router = express.Router();
const userController = require("../controllers/UsersController");

router.get("/", userController.index);
router.post("/create", userController.createData);

module.exports = router;