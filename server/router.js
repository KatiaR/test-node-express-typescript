const { Router } = require('express');
const { getProducts, getProduct } = require('./controllers/products');

const router = Router();

router.get('/product/:id', getProduct);

router.get('/', getProducts);

module.exports = router;
