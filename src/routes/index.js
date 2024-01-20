const { Router } = require("express");
const siteRouter = require('./site');
const newsRouter = require('./news');
const categoryRouter = require('./category');


function route(app) {

    app.use('/danh-muc', categoryRouter);
    app.use('/tin-tuc', newsRouter);
    app.use('/', siteRouter);
}

module.exports = route;