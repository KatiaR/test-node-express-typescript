const axios = require('axios');

const getProducts = async (req, res, next) => {
	try {
		const response = await axios.get(
			'https://bojwbhw97e.execute-api.us-east-2.amazonaws.com/Production/eshop-challenge/products'
		);
		return res.send(response.data.body);
	} catch (e) {
		console.error(e);
	}
};

const getRating = (req, res, next) => {
	console.log('getRatings');
};

const getPrice = (req, res, next) => {
	console.log('getPrice');
};

module.exports = {
	getProducts,
	getRating,
	getPrice,
};
