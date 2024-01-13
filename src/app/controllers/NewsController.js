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

    //[GET] /tin-tuc/thung-rac
    trash(req, res, next) {
        News.findDeleted({ deleted: true, deletedAt: { $ne: null } })
            .then(news => {
                res.render('news/trash', { news: multipleMongooseToObject(news) })
            })
            .catch(next);
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

    //[GET] /tin-tuc/:id/edit
    edit(req, res, next) {
        News.findById({ _id: req.params.id })
            .then(news => {
                res.render('news/edit', { news: mongooseToObject(news) });
            })
            .catch(next);
    }

    //[PUT] /tin-tuc/:id
    update(req, res, next) {
        News.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/tin-tuc')) //redirect tra ve 1 header location
            .catch(next);
    }

    //[DELETE] /tin-tuc/:id
    destroy(req, res, next) {
        News.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //[DELETE] /tin-tuc/:id/xoa , xóa vĩnh viễn
    forceDestroy(req, res, next) {
        News.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //[PATCH] /tin-tuc/:id/khoi-phuc
    restore(req, res, next) {
        News.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }



}

module.exports = new SiteController();