import { ProductsTypes } from './components/interfaces';

const getData = async (url: string) => {
	const res = await fetch(url).then((res) => {
		return res.json() as Promise<ProductsTypes[]>;
	});
	return res;
};

export default getData;
