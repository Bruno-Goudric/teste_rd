import React from 'react';

import { Container, Modal, ButtonClosed, Content } from './styles';

interface ClosedProps {
  onClose: React.ReactEventHandler<{}>;
}
const Popup: React.FC<ClosedProps> = ({ onClose, children }) => {
  return (
    <Container onClick={onClose}>
      <Modal>
        <ButtonClosed onClick={onClose} />
        <Content>{children}</Content>
      </Modal>
    </Container>
  );
};

export default Popup;
