const { mongoose } = require("mongoose");

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/news_management');
        console.log('Kết nối database thành công');
    } catch (error) {
        console.log('Kết nối database không thành công');
    }
}

module.exports = { connect };