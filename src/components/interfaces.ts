export interface ProductsTypes {
	npkId: string;
	productId: number;
	url: string;
	name: string;
	image: string;
	brand: string;
	price: number;
	rating: number;
	sek: number | 'No price';
	nok: number | 'No price';
}
export interface ProdListType {
	onClick?: (itemId: number) => void;
}
