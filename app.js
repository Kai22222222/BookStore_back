const express = require("express");
const cors = require("cors");
const contactsRouter = require("./app/routes/contact.route");
const booksRouter = require("./app/routes/books.route");
const nxbRouter = require("./app/routes/nxb.route");
const borrowRouter = require("./app/routes/borrow.route");
const nhanvienRouter = require("./app/routes/nhanvien.route");
const ApiError = require("./app/api-error.js");
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/app/uploads', express.static(path.join(__dirname, 'app/uploads')));
app.use("/api/contacts", contactsRouter);
app.use("/api/books", booksRouter);
app.use("/api/nxb", nxbRouter);
app.use("/api/nhanvien", nhanvienRouter);
app.use("/api/borrow", borrowRouter);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application@@@" });
});

//handle 404 response
app.use((req, res, next) => {
    //Code chạy khi không có route định nghĩa
    //gọi next() khi khớp vs yêu cầu, chuyển sang middleware xử lý lỗi
    return next(new ApiError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
    //Middleware xử lý lỗi tập trung
    //trong đonaj code xl ở các route, gọi next(error) sẽ chuyển về middleware xử lý lỗi này
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
});

module.exports = app;
