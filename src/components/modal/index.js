import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';
// import styled from 'styled-components';
import {
  // DarkenedBackdrop,
  ModalContainer,
  CloseButton,
  DownloadImageButton,
} from './style';
import { ScreenReaderOnly } from '../helper-styles';
import './styles.css';

// const Test = styled(FocusTrap)`
//   ${DarkenedBackdrop}
// `;

class Modal extends Component {
  static propTypes = {
    tags: PropTypes.string.isRequired,
    smallImageUrl: PropTypes.string.isRequired,
    largeImageUrl: PropTypes.string.isRequired,
    handleClosingModal: PropTypes.func.isRequired,
    closeButtonRef: PropTypes.object.isRequired,
  };

  imageRef = React.createRef();

  handleClickOutsideModal = event => {
    const { handleClosingModal } = this.props;
    if (this.imageRef && this.imageRef.current.contains(event.target)) return;
    handleClosingModal();
  };

  // handleEscapeKey = event => {
  //   const { handleClosingModal } = this.props;
  //   return event.keyCode === 27 && handleClosingModal();
  // };

  render() {
    const {
      tags,
      smallImageUrl,
      largeImageUrl,
      handleClosingModal,
      closeButtonRef,
    } = this.props;
    return ReactDOM.createPortal(
      <FocusTrap
        className="darkened-backdrop"
        aria-modal="true"
        tabIndex="-1"
        role="dialog"
        aria-label="Fullscreen Image"
        // onKeyDown={this.handleEscapeKey}
        onClick={this.handleClickOutsideModal}
      >
        <ModalContainer>
          <img src={smallImageUrl} alt={tags} ref={this.imageRef} />
          <CloseButton
            type="button"
            onClick={handleClosingModal}
            ref={closeButtonRef}
          >
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
      </FocusTrap>,
      document.body
    );
  }
}

export default Modal;
