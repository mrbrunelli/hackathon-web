const express = require("express");
const router = express.Router();
const { index, show } = require("../controllers/vehicles-controller");

router.get("/", index);

module.exports = router;
