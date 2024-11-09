const express = require("express");
const borrow = require("../controllers/borrow.controller")
const router = express.Router();

router.route("/")
    .get(borrow.findAll)
    .post(borrow.create)
module.exports = router;