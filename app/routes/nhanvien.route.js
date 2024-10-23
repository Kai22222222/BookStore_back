const express = require("express");
const nv = require("../controllers/nhanvien.controller")
const router = express.Router();

router.route("/")
    .get(nv.findAll)
    .post(nv.create);

module.exports = router;