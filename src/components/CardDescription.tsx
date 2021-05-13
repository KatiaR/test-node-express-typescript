import React, { useEffect, useState } from 'react';
import { Avatar, Descriptions, Rate, Spin, Image, Layout, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { getProduct } from '../requestTemplate';
import { ProductsTypes } from './interfaces';
import { useParams, useHistory } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

const CardDescription = () => {
	const [data, setData] = useState<ProductsTypes>();
	const history = useHistory();
	let params = useParams<{ id: string }>();
	const buttonBackHandler = () => {
		history.push(`/`);
	};
	useEffect(() => {
		let mounted = true;
		const thenable = async () => {
			if (!data && mounted) {
				const data = await getProduct(params.id);
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
		<>
			<Button
				type="ghost"
				shape="circle"
				icon={<ArrowLeftOutlined />}
				onClick={() => {
					buttonBackHandler();
				}}
			/>
			<Layout>
				<Content>
					<Image src={data.image}></Image>
					<div>
						<Rate disabled defaultValue={data.rating} />
					</div>
					<Descriptions title={data.name} layout="vertical" bordered>
						<Descriptions.Item label="npkId">
							{data.npkId}
						</Descriptions.Item>
						<Descriptions.Item label="brand">
							{data.brand}
						</Descriptions.Item>
					</Descriptions>
					<Descriptions title="price" bordered>
						<Descriptions.Item label="nok">
							{data.nok}
						</Descriptions.Item>
						<Descriptions.Item label="sek">
							{data.sek}
						</Descriptions.Item>
						<Descriptions.Item label="ddk">
							{data.price}
						</Descriptions.Item>
					</Descriptions>
				</Content>
			</Layout>
		</>
	);
};

export default CardDescription;
