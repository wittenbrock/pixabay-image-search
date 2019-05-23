import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AriaModal from 'react-aria-modal';
import { ModalContainer, CloseButton, DownloadImageButton } from './style';
import { ScreenReaderOnly, CenteredRow } from '../helper-styles';

class Modal extends Component {
  static propTypes = {
    tags: PropTypes.string.isRequired,
    smallImageUrl: PropTypes.string.isRequired,
    largeImageUrl: PropTypes.string.isRequired,
    handleDeactivatingModal: PropTypes.func.isRequired,
  };

  imageRef = React.createRef();

  getApplicationNode = () => document.getElementById('root');

  handleClickOutsideImage = event => {
    const { handleDeactivatingModal } = this.props;
    if (this.imageRef.current.contains(event.target)) return;
    handleDeactivatingModal();
  };

  render() {
    const {
      tags,
      smallImageUrl,
      largeImageUrl,
      handleDeactivatingModal,
    } = this.props;
    return (
      <AriaModal
        titleText="Fullscreen Image"
        onExit={handleDeactivatingModal}
        getApplicationNode={this.getApplicationNode}
        initialFocus="#modal-close-button"
        underlayColor="hsla(0, 0%, 0%, 0.7)"
        verticallyCenter
      >
        <ModalContainer as="figure" onClick={this.handleClickOutsideImage}>
          <img src={smallImageUrl} alt={tags} ref={this.imageRef} />
          <CenteredRow>
            <DownloadImageButton
              as="a"
              download
              href={largeImageUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ScreenReaderOnly>Download image</ScreenReaderOnly>
            </DownloadImageButton>
            <CloseButton
              type="button"
              onClick={handleDeactivatingModal}
              id="modal-close-button"
            >
              <ScreenReaderOnly>Close fullscreen image</ScreenReaderOnly>
            </CloseButton>
          </CenteredRow>
        </ModalContainer>
      </AriaModal>
    );
  }
}

export default Modal;
