const { mongoose } = require("mongoose");
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Category = new Schema({
    category: { 
        type: String,
        required: true, 
        unique: true, 
    }
}, { timestamps: true, });

Category.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' })

module.exports = mongoose.model('Category', Category);