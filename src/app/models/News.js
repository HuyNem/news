const { mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const News = new Schema({
  title: { type: String},
  content: { type: String},
  category: { type: String},
}, { timestamps: true, });

module.exports = mongoose.model('News', News);