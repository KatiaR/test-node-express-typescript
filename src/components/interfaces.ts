export interface ProductsTypes {
	npkId: string;
	productId: number;
	url?: string;
	name?: string;
	image?: string;
	brand?: string;
	price?: number;
}

// export interface CardProductProps {
// 	products: Array<ProductsTypes>;
// }

export interface ProdListType {
	onClick?: (itemId: number) => void;
}
