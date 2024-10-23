const express = require("express");
const nxb = require("../controllers/nxb.controller")
const router = express.Router();

router.route("/")
    .get(nxb.findAll)
    .post(nxb.create);

module.exports = router;