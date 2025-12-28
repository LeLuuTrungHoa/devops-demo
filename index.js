const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>Chào mừng đến với Demo DevOps!</h1><p>Hệ thống CI/CD đã hoạt động.</p>');
});

app.listen(PORT, () => {
    console.log(`Ứng dụng đang chạy tại http://localhost:${PORT}`);
});

module.exports = app;