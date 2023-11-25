const express = require("express");
const router = express.Router();

const detailController = require("../controller/detail");

// router.post("/", detailController.addDetail);

router.post("/", detailController.addDetail);
router.get("/", detailController.getDetail);

exports.router = router;
