const express = require('express');
const router = express.Router();
const basketController= require('../controllers/basketController');
router.post('/', basketController.createBasket);
router.get('/list', basketController.listBaskets);
router.delete('/delete/:basketId', basketController.deleteBasket);
module.exports = router;
