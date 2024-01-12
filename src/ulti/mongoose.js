module.exports = {
    multipleMongooseToObject: function (mongooses) {
        return mongooses.map(mongooses => mongooses.toObject())
    },

    mongooseToObject: function (mongooses) {
        return mongooses ? mongooses.toObject() : mongooses;
    }
};