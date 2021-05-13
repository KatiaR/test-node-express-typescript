import React, { useState, useEffect } from 'react';
import CardProduct from './Card';
import { Spin } from 'antd';
import { ProductsTypes, ProdListType } from './interfaces';
import { getData } from '../requestTemplate';

const ProdList: React.FC<ProdListType> = () => {
	const [data, setData] = useState<ProductsTypes[]>();

	useEffect(() => {
		let mounted = true;
		const thenable = async () => {
			if (!data && mounted) {
				const data = await getData();
				setData(data);
			}
		};
		thenable();
		return function cleanup() {
			mounted = false;
		};
	}, [data]);

	return !data ? (
		<Spin />
	) : (
		<div className="card">
			{data.map((product) => {
				return (
					<CardProduct key={product.productId} products={product} />
				);
			})}
		</div>
	);
};

export default ProdList;
