import React from 'react';
import ReactDOM from 'react-dom';

import { Layout, Menu, Icon, Row, Col } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

import { SideBar } from './components/SideBar.jsx';
import { FileCard } from './components/FileCard.jsx';


let app = document.getElementById('root');


let files = [];

for (var i=0; i<10; i++) {
	let item = <Col className='gutter-row' style={{marginBottom: 10}} xxl={3} xl={4} lg={6} md={6} sm={12}> <FileCard /> </Col>;
	files.push(item);
}


class App extends React.Component {
	render(){
		return (
			<Layout style={{height: '100%'}}>
				<Sider  breakpoint="lg"
      					collapsedWidth="0"
      					onCollapse={(collapsed, type) => { console.log(collapsed, type); }}>
					<SideBar />
				</Sider>
				<Layout>
					<Header style={{ background: '#fff', padding: 0 }}>
					<Menu
				        theme="light"
				        mode="horizontal"
				        style={{ lineHeight: '64px' }}
				      >
					        <Menu.Item key="1">
					        	<Icon type="upload" />
					        	Загрузить
					        </Menu.Item>
					        <Menu.Item key="2">
					        	<Icon type="folder-add" />
					        	Создать папку
					        </Menu.Item>
				    </Menu>
						
					</Header>
				    <Content style={{ margin: '24px 16px 0', height: '100%' }}>
				        <div style={{ padding: 24, background: '#fff', height: '100%' }}>

				        	<Row gutter={12}>

					        	{files}

				        	</Row>

				        	

				        </div>
				    </Content>
				    <Footer style={{ textAlign: 'center' }}>
				        AkiCloud ©2018 Created by Vladimir Ch.
				    </Footer>
				</Layout>
			</Layout>
		);
	}
}

ReactDOM.render(<App />, app);