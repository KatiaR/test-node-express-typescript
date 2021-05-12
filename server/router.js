const { Router } = require('express');
const { getProducts } = require('./controllers/products');

const router = Router();

router.get('/', getProducts);

// router.get('/:id', getProduct);

// router.get('/rating', getRating);

// router.get('/price/:price', getPrice);

module.exports = router;
