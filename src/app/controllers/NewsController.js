const News = require('../models/News');
const { multipleMongooseToObject } = require('../../ulti/mongoose')
const { mongooseToObject } = require('../../ulti/mongoose')

class SiteController {
    async index(req, res, next) {

        News.find({})
            .then(news => {
                res.render('news/show', { news: multipleMongooseToObject(news) })
            })
            .catch(error => next(error));
    }

    //[GET]
    create(req, res, next) {
        res.render('news/create');
    }

    //[POST]
    store(req, res, next) {
        const news = new News(req.body);
        news.save()
            .then(() => res.redirect('/tin-tuc'))
            .catch(error => {

            });
    }

    //[GET]
    detail(req, res, next) {
        News.findOne({ _id: req.params._id })
            .then(news => {
                res.render('news/detail', { news: mongooseToObject(news) });
            })
            .catch(next);
    }

}

module.exports = new SiteController();