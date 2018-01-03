import React from 'react';
import Modal from 'react-modal';

export default class PluginModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button
          onClick={this.openModal}
          className="modal-button"
        >
          Open Modal
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className={{
            base: 'modal-content',
            afterOpen: '',
            beforeClose: '',
          }}
          overlayClassName={{
            base: 'modal-overlay',
            afterOpen: '',
            beforeClose: '',
          }}
          contentLabel="Example Modal"
        >

          <h2>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
        </Modal>
      </div>
    );
  }
}
