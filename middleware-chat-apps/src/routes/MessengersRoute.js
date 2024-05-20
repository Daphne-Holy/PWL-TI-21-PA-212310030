const express = require("express");
const router = express.Router();
const messengersController = require("../controllers/MessengersController");

router.get("/", messengersController.index);
router.get("/fetch-all", messengersController.GetAll);
router.post("/create", messengersController.createData);

module.exports = router;