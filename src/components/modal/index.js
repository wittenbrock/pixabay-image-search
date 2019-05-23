import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  DarkenedBackdrop,
  ModalContainer,
  CloseButton,
  DownloadImageButton,
} from './style';
import { ScreenReaderOnly } from '../helper-styles';

class Modal extends Component {
  static propTypes = {
    tags: PropTypes.string.isRequired,
    smallImageUrl: PropTypes.string.isRequired,
    largeImageUrl: PropTypes.string.isRequired,
    handleDeactivatingModal: PropTypes.func.isRequired,
  };

  render() {
    const {
      tags,
      smallImageUrl,
      largeImageUrl,
      handleDeactivatingModal,
    } = this.props;
    return (
      <DarkenedBackdrop>
        <ModalContainer>
          <img src={smallImageUrl} alt={tags} />
          <CloseButton type="button" onClick={handleDeactivatingModal}>
            <ScreenReaderOnly>Close Modal</ScreenReaderOnly>
          </CloseButton>
          <DownloadImageButton
            as="a"
            download
            href={largeImageUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ScreenReaderOnly>Download Image</ScreenReaderOnly>
          </DownloadImageButton>
        </ModalContainer>
      </DarkenedBackdrop>
    );
  }
}

export default Modal;
