const path = require('path');
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './app/uploads/')
    },
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname);
        // Chỉ cần sử dụng tên file để trả về đường dẫn mong muốn
        cb(null, + Date.now() + ext); // Đường dẫn sẽ là "uploads/1729698525566.png"
    }
});

var upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        if (
            "image/png",
            "image/jpg",
            "image/jpeg",  // Thêm định dạng jpg và jpeg
            "image/gif",   // Thêm định dạng gif
            "image/bmp",   // Thêm định dạng bmp
            "image/webp",  // Thêm định dạng webp
            "image/svg+xml"
        ) {
            callback(null, true);
        } else {
            console.log('only jpg & png file supported!');
            callback(null, false);
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2 // 2 MB
    }
});

module.exports = upload;
