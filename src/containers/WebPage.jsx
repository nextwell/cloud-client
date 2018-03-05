import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SideBar from './../components/SideBar.jsx';
import MainFunctions from './../components/MainFunctions.jsx';
import FilesList from './files-list.jsx';

import { Layout, Menu, Icon, Row, Col } from 'antd';
const { Header, Content, Footer, Sider } = Layout;



class WebPage extends React.Component {
	test(){
		console.log(this.props.config);
	}
	render(){
		return(
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
		)
	}
}

function mapStateToProps(state) {
	return {
		config: state.config,
		files: state.files,
		user: state.user
	};
}

export default connect(mapStateToProps)(WebPage);