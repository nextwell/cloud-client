import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

import { Layout, Menu, Icon, Row, Col } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

import { SideBar } from './components/SideBar.jsx';
import { FileCard } from './components/FileCard.jsx';
import { MainFunctions } from './components/MainFunctions.jsx';

import { store } from './store/store.jsx';

import FilesList from './containers/files-list.jsx';

import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';


let app = document.getElementById('root');




class App extends React.Component {
	render(){
		return (
			<Provider store={store}>
				<Layout style={{height: '100%'}}>
					<Sider  breakpoint="lg"
	      					collapsedWidth="0"
	      					onCollapse={(collapsed, type) => { console.log(collapsed, type); }}>
						<SideBar />
					</Sider>
					<Layout>
						<Header style={{ background: '#fff', padding: 0 }}>
							<MainFunctions />
						</Header>
	     


					    <Content style={{ margin: '24px 16px 0', height: 'auto', overflowY: 'auto' }}>
					        <div style={{ padding: 24, background: '#fff', height: '100%' }}>

					        	<Row gutter={12}>

						        	<FilesList />

					        	</Row>

					        	

					        </div>
					    </Content>
					    <Footer style={{ textAlign: 'center' }}>
					        AkiCloud ©2018 Created by Vladimir Ch.
					    </Footer>
					</Layout>
				</Layout>

			</Provider>
		);
	}
}

ReactDOM.render(<App />, app);