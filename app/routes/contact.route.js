const express = require("express");
const contacts = require("../controllers/contact.controller");
const router = express.Router();

router.route("/")
    .get(contacts.findAll)
    .post(contacts.create)
    .delete(contacts.deleteAll)
    .put(contacts.checkLogIn);

router.route("/favorite")
    .get(contacts.findAllFavorite);

router.route("/:id")
    .get(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.delete);
router.route("/user/:username")
    .get(contacts.findByName)
router.route("/login")
    .put(contacts.checkLogIn);



module.exports = router;
