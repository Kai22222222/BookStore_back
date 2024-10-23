const express = require("express");
const books = require("../controllers/books.controller")
const router = express.Router();

router.route("/")
    .get(books.findAll)
    .post(books.create);

module.exports = router;