
import React from 'react';

import { Menu, Icon, Modal, Button, Upload, message } from 'antd';

const Dragger = Upload.Dragger;

const props = {
  name: 'file',
  multiple: true,
  action: "jsonplaceholder.typicode.com/posts/",
  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

class MainFunctions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  uploaderModal: false };
    }
    setUploaderVisible(uploaderModal) {
        this.setState({ uploaderModal });
    }
    render() {
        return (
            <Menu
                theme="light"
                mode="horizontal"
                style={{ lineHeight: '64px' }}
                selectable={false}
            >
                <Menu.Item key="1">
                    <Button icon="upload" onClick={() => this.setUploaderVisible(true)}>Загрузить</Button>
                </Menu.Item>
                <Modal
                  title="Vertically centered modal dialog"
                  wrapClassName="vertical-center-modal"
                  visible={this.state.uploaderModal}
                  onOk={() => this.setUploaderVisible(false)}
                  onCancel={() => this.setUploaderVisible(false)}
                  okText="Ок"
                  cancelText="Закрыть"
                >
                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                          <Icon type="inbox" />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
                    </Dragger>
                </Modal>
            </Menu>
        );
    }
}

export { MainFunctions };