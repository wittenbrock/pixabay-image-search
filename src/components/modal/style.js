import styled from 'styled-components';
import '../../assets/icon-close.svg';
import '../../assets/icon-close-hover.svg';
import '../../assets/icon-inbox-download.svg';
import '../../assets/icon-inbox-download-hover.svg';
import { CenteredColumn } from '../helper-styles';

// Styled Components and Focus Trap do not play nice together
// Used styled object with ClassName as an alternative solution
// export const darkenedBackdrop = {
//   position: 'fixed',
//   top: '0',
//   left: '0',
//   width: '100%',
//   height: '100%',
//   zIndex: '1',
//   transform: 'translateZ(0)',
//   backgroundColor: 'hsla(0, 0%, 0%, 0.6)',
// };

export const DarkenedBackdrop = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transform: translateZ(0);
  background-color: hsla(0, 0%, 0%, 0.6);
`;

export const ModalContainer = styled(CenteredColumn)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2.5em 1.5em 1.5em 1.5em;
  overflow-y: auto;
  background-color: hsla(0, 0%, 0%, 0.6);
  -webkit-overflow-scrolling: touch;

  @media screen and (min-width: 600px) {
    left: 50%;
    top: 50%;
    height: auto;
    transform: translate(-50%, -50%);
    max-width: 30em;
    max-height: calc(100% - 1em);
    background-color: transparent;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  background-image: url('/assets/icon-close.svg');
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 1rem;
  top: 0;
  height: 6rem;
  width: 6rem;
  transition: transform ease-in-out 0.2s;

  @media screen and (hover) {
    &:focus,
    &:hover {
      background-image: url('/assets/icon-close-hover.svg');
    }

    &:focus {
      transform: scale(1.05);
    }
  }
`;

export const DownloadImageButton = styled(CenteredColumn)`
  background-image: url('/assets/icon-inbox-download.svg');
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 1rem;
  height: 5rem;
  width: 5rem;
  transition: transform ease-in-out 0.2s;

  @media screen and (hover) {
    &:focus,
    &:hover {
      background-image: url('/assets/icon-inbox-download-hover.svg');
    }

    &:focus {
      transform: scale(1.05);
      outline: none;
    }
  }
`;
