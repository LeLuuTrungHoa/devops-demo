// Một bài test đơn giản để kiểm tra xem logic có chạy đúng không
const assert = require('assert');

try {
    console.log("Đang bắt đầu chạy Unit Test...");
    const message = "Hello DevOps";
    assert.strictEqual(typeof message, 'string');
    
    console.log("✅ Tất cả các bài Test đã vượt qua!");
    process.exit(0);
} catch (error) {
    console.error("❌ Test thất bại:", error.message);
    process.exit(1);
}