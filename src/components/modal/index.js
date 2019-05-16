import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyledFigure,
  StyledDiv,
  CloseButton,
  DownloadLargeImage,
} from './style';
import { ScreenReaderOnly } from '../helper-styles';

class Modal extends Component {
  componentDidMount = () => {
    document.addEventListener('mousedown', this.handleClickOutsideModal);
  };

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.handleClickOutsideModal);
  };

  setModalRef = htmlNode => {
    this.modalRef = htmlNode;
  };

  handleClickOutsideModal = event => {
    const { handleClosingModal } = this.props;
    if (!this.modalRef.contains(event.target)) {
      handleClosingModal();
    }
  };

  render() {
    const {
      tags,
      smallImageUrl,
      largeImageUrl,
      handleClosingModal,
    } = this.props;
    return (
      <StyledFigure>
        <StyledDiv ref={this.setModalRef}>
          <img src={smallImageUrl} alt={tags} />
          <CloseButton type="button" onClick={handleClosingModal}>
            <ScreenReaderOnly>Close Modal</ScreenReaderOnly>
          </CloseButton>
          <DownloadLargeImage
            as="a"
            download
            href={largeImageUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ScreenReaderOnly>Download</ScreenReaderOnly>
          </DownloadLargeImage>
        </StyledDiv>
      </StyledFigure>
    );
  }
}

Modal.propTypes = {
  tags: PropTypes.string.isRequired,
  smallImageUrl: PropTypes.string.isRequired,
  largeImageUrl: PropTypes.string.isRequired,
  handleClosingModal: PropTypes.func.isRequired,
};

export default Modal;
