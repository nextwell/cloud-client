import React from 'react';

import { Modal, Button, Upload, message } from 'antd';

const Dragger = Upload.Dragger;

export default class Uploader extends React.Component {
  state = {
    uploaderModal: false
  }
  setUploaderVisible(uploaderModal) {
    this.setState({ uploaderModal });
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={() => this.setUploaderVisible(true)}>Vertically centered modal dialog</Button>
        <Modal
          title="Загрузка файлов"
          wrapClassName="vertical-center-modal"
          visible={this.state.uploaderModal}
          onOk={() => this.setUploaderVisible(false)}
          onCancel={() => this.setUploaderVisible(false)}
          okText="Готово"
          cancelText="Закрыть"
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </div>
    );
  }
}