import React from 'react';

import { Card, Icon, Avatar, Button, Modal } from 'antd';
const { Meta } = Card;

const confirm = Modal.confirm;



class FileCard extends React.Component {
	showDeleteConfirm() {
	    confirm({
		    title: 'Удалить файл?',
		    content: 'Подтвердите действие',
		    okText: 'Да',
		    okType: 'danger',
		    cancelText: 'Нет',
		    onOk() {
		      console.log('OK');
		    },
		    onCancel() {
		      console.log('Cancel');
		    },
	    });
	}
	render(){
		return(
			<Card
			    style={{ width: 150, margin: '0 auto' }}
			    cover={<Icon style={{ fontSize: 40, marginTop: 12 }} type="file" />}
			    actions={[<Button type="primary" shape="circle" icon="download"/>, <Button shape="circle" icon="share-alt"/>,  <Button type="danger" shape="circle" icon="delete" onClick={this.showDeleteConfirm}/>]}
			  >
			    <Meta
			      title="image.jpg"
			      description="Размер: 12кб"
			    />
			</Card>


		)
	}
}

export { FileCard };