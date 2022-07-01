const express = require("express");
const router = express.Router();
const Tourlar = require("../controller/tourcontroller");

router.route("/post").post(Tourlar.createTour);
router.route("/").get(Tourlar.getTours);
module.exports = router;
