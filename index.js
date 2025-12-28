const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
app.get('/', (req, res) => {
    res.send('<h1>Chào mừng đến với Demo DevOps!</h1><p>Hệ thống CI/CD đã hoạt động.</p>');
});

module.exports = app;