import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { Col } from 'antd';

import { FileCard } from '../components/FileCard.jsx';

class FilesList extends React.Component {
	showList(){
		return this.props.files.map ((file) => {
			return (
				<Col key={file.id} className='gutter-row' style={{marginBottom: 10}} xxl={3} xl={4} lg={6} md={6} sm={12}>
					<FileCard fileName={file.name} fileSize={file.size} />
				</Col>
			)
		})
	}
	render(){
		return (
			<div>
				{this.showList()}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		files: state.files
	};
}

export default connect(mapStateToProps)(FilesList);