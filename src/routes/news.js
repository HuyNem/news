const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController.js');


router.get('/chi-tiet/:_id', newsController.detail);
router.post('/store', newsController.store);
router.get('/them-moi', newsController.create);
router.get('/:id/sua', newsController.edit);
router.put('/:id', newsController.update);
router.patch('/:id/khoi-phuc', newsController.restore);
router.delete('/:id', newsController.destroy);
router.delete('/:id/xoa', newsController.forceDestroy);
router.get('/thung-rac', newsController.trash);
router.get('/', newsController.index);

module.exports = router;