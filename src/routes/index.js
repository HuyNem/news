const { Router } = require("express");
const siteRouter = require('./site');
const newsRouter = require('./news');


function route(app) {

    app.use('/tin-tuc', newsRouter);
    app.use('/', siteRouter);
}

module.exports = route;