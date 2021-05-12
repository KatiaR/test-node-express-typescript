import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProdList from './components/ProdList';
import CardDescription from './components/CardDescription';
import { Layout } from 'antd';

import 'antd/dist/antd.css';
import './App.css';
const { Header, Footer, Content } = Layout;

function App() {
	return (
		<div className="App">
			<Layout>
				<Header className="mainHeader">Product List</Header>
				<Switch>
					<Route path="/" exact>
						<Content>
							<ProdList />
						</Content>
					</Route>
					<Route path="/product/:id">
						<Content>
							<CardDescription />
						</Content>
					</Route>
				</Switch>
				<Footer>Footer</Footer>
			</Layout>
		</div>
	);
}

export default App;
