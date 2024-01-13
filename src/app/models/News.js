const { mongoose } = require("mongoose");
const mongooseDelete = require('mongoose-delete');


const Schema = mongoose.Schema;

const News = new Schema({
  title: { type: String },
  content: { type: String },
  category: { type: String },
}, { timestamps: true, });

News.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' })

module.exports = mongoose.model('News', News);