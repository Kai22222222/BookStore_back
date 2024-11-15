const express = require("express");
const books = require("../controllers/books.controller")
const router = express.Router();
const upload = require('../middleware/upload')
router.route("/")
    .get(books.findAll)
    .post(upload.single('avatar'), books.create)

router.route("/:id")
    .get(books.findOne)
    .put(books.update)

router.route("/nxb/:manxb")
    .get(books.findByPublisher)
module.exports = router;