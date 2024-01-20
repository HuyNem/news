const Category = require('../models/Category');
const { multipleMongooseToObject } = require('../../ulti/mongoose')
const { mongooseToObject } = require('../../ulti/mongoose')

class CategoryController {
    //[GET] /danh-muc
    show(req, res, next) {
        Category.find({})
            .then(category => {
                res.render('category/show', { category: multipleMongooseToObject(category) })
            })
            .catch(error => next(error));
    }

    //[GET] /danh-muc/them-moi
    create(req, res, next) {
        res.render('category/create');
    }

    //[POST] /danh-muc/them-moi/store
    store(req, res, next) {
        const category = new Category(req.body);
        category.save()
            .then(() => res.redirect('/danh-muc'))
            .catch(error => {

            });
    }

    //[GET] /danh-muc/:id/edit
    edit(req, res, next) {
        Category.findById({ _id: req.params.id })
            .then(category => {
                res.render('category/edit', { category: mongooseToObject(category) });
            })
            .catch(next);
    }

    //[PUT] /danh-muc/:id
    update(req, res, next) {
        Category.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/danh-muc')) //redirect tra ve 1 header location
            .catch(next);
    }

    //[DELETE] /danh-muc/:id/xoa , xóa vĩnh viễn
    delete(req, res, next) {
        Category.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}


module.exports = new CategoryController();