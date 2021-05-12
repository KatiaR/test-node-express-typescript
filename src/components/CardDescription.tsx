import React from 'react';
import { Descriptions } from 'antd';
import 'antd/dist/antd.css';

const CardDescription = () => {
	return (
		<Descriptions title="Card Info">
			<img
				alt="products"
				src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
			/>
			<Descriptions.Item label="npkId">Zhou Maomao</Descriptions.Item>
			<Descriptions.Item label="url">1810000000</Descriptions.Item>
			<Descriptions.Item label="name">
				Hangzhou, Zhejiang
			</Descriptions.Item>
			<Descriptions.Item label="brand">empty</Descriptions.Item>
			<Descriptions.Item label="price">
				No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
			</Descriptions.Item>
		</Descriptions>
	);
};

export default CardDescription;
