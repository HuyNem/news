const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController.js');


router.get('/chi-tiet/:_id', newsController.detail);
router.post('/store', newsController.store);
router.get('/them-moi', newsController.create);
router.get('/', newsController.index);


module.exports = router;