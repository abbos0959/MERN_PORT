const express = require("express");
const router = express.Router();
const Tourlar = require("../controller/tourcontroller");
const auth=require("../middleware/auth")

router.route("/tour").post(auth, Tourlar.createTour);
router.route("/").get(Tourlar.getTours);
router.route("/:id").get(Tourlar.getTourById);
module.exports = router;
