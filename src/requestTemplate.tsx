import { ProductsTypes } from './components/interfaces';
import { ENDPOINT } from './constants';

export const getData = async () => {
	const res = await fetch(ENDPOINT).then((res) => {
		return res.json() as Promise<ProductsTypes[]>;
	});
	return res;
};

export const getProduct = async (id: string) => {
	const res = await fetch(`${ENDPOINT}/product/${id}`).then((res) => {
		return res.json() as Promise<ProductsTypes>;
	});
	return res;
};
