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
    .delete(books.delete);
router.route("/nxb/:manxb")
    .get(books.findByPublisher)

router.route("/uploadCover")
    .post(upload.single("avatar"), (req, res) => {
        try {
            const coverPath = `app/uploads/${req.file.filename}` //path
            console.log(coverPath);
            res.status(200).json({
                message: "Upload ảnh thành công",
                imageUrl: coverPath, // Đường dẫn ảnh được trả về để lưu trữ trong thông tin sách
            });
        } catch (error) {
            res.status(500).json({
                message: "Có lỗi xảy ra khi upload ảnh",
                error: error.message,
            });
        }
    });

module.exports = router;
