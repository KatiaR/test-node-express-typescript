import React from 'react';
import { Card, Badge } from 'antd';
import { useHistory } from 'react-router-dom';
import 'antd/dist/antd.css';
import { ProductsTypes } from './interfaces';

const { Meta } = Card;

const CardProduct = (props: { products: ProductsTypes }) => {
	const history = useHistory();

	const handleSelectedItem = (id: number) => {
		history.push(`/product/${id}`);
	};

	return (
		<Badge.Ribbon text={`${props.products.price} dkk`}>
			<Card
				onClick={() => handleSelectedItem(props.products.productId)}
				hoverable
				style={{ width: 240 }}
				cover={
					<img
						alt={props.products.brand}
						src={props.products.image}
					/>
				}
			>
				<Meta
					title={props.products.name}
					description={props.products.url}
				/>
			</Card>
		</Badge.Ribbon>
	);
};

export default CardProduct;
