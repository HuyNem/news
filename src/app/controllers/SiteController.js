
class SiteController {
    async index(req, res, next) {

        res.render('home')
    }

}

module.exports = new SiteController();