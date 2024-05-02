const express = require("express");
const router = express.Router();
const PingController = require("../../controllers/ping/ping.controller");

router.get("/ping", PingController.getPing);

module.exports = router;
