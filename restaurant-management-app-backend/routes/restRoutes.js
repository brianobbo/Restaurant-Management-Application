const express = require("express");
const restController = require("../controllers/restControllers");

const router = express.Router();

router.post("/create", restController.createRest);
router.get("/", restController.allRests);

module.exports = router;
