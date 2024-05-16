const express = require('express');
const router = express.Router();
const purchaseController = require('../controllers/purchaseController');
router.post('/:prodId', purchaseController.createPurchase);
router.get('/list', purchaseController.getPurchaseList);
module.exports = router;