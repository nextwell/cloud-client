import React from 'react';

import { connect } from 'react-redux';

import * as types from './../actions/actionTypes.jsx';

import {store} from './../store/store.jsx';



import { Card, Icon, Avatar, Button, Popconfirm, message } from 'antd';
const { Meta } = Card;

import axios from 'axios';



class FileCard extends React.Component {
	constructor(props, context){
		super(props, context)
		this.delete = this.delete.bind(this);
	}
	delete(e) {
	    axios.get(`/remove/${this.props.id}`)
	    	.then(function(response) { /* idk */ })

	    store.dispatch({type: types.DELETE_FILE, data: this.props.id})
	    

	}

	render(){
		let data = this.props;
		let downloadLink = `/download/${data.id}`;
		console.log(data);
		return(
			<Card
				hoverable={true}
			    style={{ width: 150, margin: '0 auto' }}
			    cover={<Icon style={{ fontSize: 40, marginTop: 12 }} type="file" />}
			    actions={[<Button type="primary" href={downloadLink} shape="circle" icon="download"/>, 
			    			<Button shape="circle" icon="share-alt"/>,( 
			    			<Popconfirm title="Удалить этот файл?" onConfirm={this.delete} okText="Удалить" cancelText="Закрыть">
			    				<Button type="danger" shape="circle" icon="delete"/>
			    			</Popconfirm>)]}>
			    <Meta
			      title={data.fileName}
			      description={"Размер: " + (data.fileSize).toFixed(2) + " МБ"}
			      style={{fontSize: 12}}
			    />
			</Card>


		)
	}
}

export default connect()(FileCard);