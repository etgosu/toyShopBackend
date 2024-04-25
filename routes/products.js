const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
router.post('/', productsController.createProduct);
router.get('/list', productsController.listProducts);
router.get('/detail/:prodNm', productsController.productDetail);

module.exports = router;
