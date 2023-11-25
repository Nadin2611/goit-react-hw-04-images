import { Component } from 'react';

import { Overlay, ModalEl } from './Modal.styled';

export class Modal extends Component {
  componentDidMount = () => {
    window.addEventListener('keydown', this.handleKeyDown);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.handleKeyDown);
  };

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { imageURL } = this.props;

    return (
      <Overlay onClick={this.handleOverlayClick}>
        <ModalEl>
          <img src={imageURL} alt="modal" />
        </ModalEl>
      </Overlay>
    );
  }
}
