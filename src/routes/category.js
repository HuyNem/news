const express = require('express');
const router = express.Router();

const categoryController = require('../app/controllers/CategoryController.js');

router.delete('/:id/xoa', categoryController.delete);
router.put('/:id', categoryController.update);
router.get('/:id/sua', categoryController.edit);
router.post('/store', categoryController.store);
router.get('/them-moi', categoryController.create);
router.get('/', categoryController.show);

module.exports = router;