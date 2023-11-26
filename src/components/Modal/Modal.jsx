import { useEffect } from 'react';

import { Overlay, ModalEl } from './Modal.styled';

export const Modal = ({ imageURL, onClose }) => {
  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalEl>
        <img src={imageURL} alt="modal" />
      </ModalEl>
    </Overlay>
  );
};
