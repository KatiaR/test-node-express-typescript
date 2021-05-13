const axios = require('axios');

const getProducts = async (req, res) => {
	try {
		const response = await axios.get(
			'https://bojwbhw97e.execute-api.us-east-2.amazonaws.com/Production/eshop-challenge/products'
		);
		return res.send(response.data.body);
	} catch (e) {
		console.error(e);
	}
};

const getProduct = async (req, res) => {
	const id = req.params.id;
	const noPrice = 'No price';
	try {
		const product = await axios.get(
			'https://bojwbhw97e.execute-api.us-east-2.amazonaws.com/Production/eshop-challenge/products'
		);
		const rating = await getRating(id);
		const result = product.data.body.filter(
			(e) => e.productId === Number(id)
		);
		const mainCurr = result?.[0].price;
		const priceNok = await getPriceNok(mainCurr, noPrice);
		const priceSec = await getPriceSec(mainCurr, noPrice);
		const response = Object.assign(result[0], rating, priceNok, priceSec);
		return res.send(response || {});
	} catch (e) {
		console.error(e);
	}
};

async function getRating(id) {
	const rating = await axios.get(
		`https://ot03ty7nhg.execute-api.us-east-2.amazonaws.com/Production/product-rating?productId=${id}`
	);
	const aRating = rating?.data.rating;
	const avgRating =
		aRating.reduce((acc, value) => acc + value) / aRating.length;
	return { rating: avgRating };
}

async function getPriceNok(mainCurr, noPrice) {
	const priceNok = await axios.get(
		`https://owlnnjqrs0.execute-api.us-east-2.amazonaws.com/Production/product-challenge-price?price=${mainCurr}&toCurrency=nok`
	);
	return { nok: priceNok.data.price || noPrice };
}

async function getPriceSec(mainCurr, noPrice) {
	const priceNok = await axios.get(
		`https://owlnnjqrs0.execute-api.us-east-2.amazonaws.com/Production/product-challenge-price?price=${mainCurr}&toCurrency=sek`
	);
	return { sek: priceNok.data.price || noPrice };
}

module.exports = {
	getProducts,
	getProduct,
};
