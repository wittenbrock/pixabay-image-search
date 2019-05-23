import styled from 'styled-components';
import '../../assets/icon-close.svg';
import '../../assets/icon-close-hover.svg';
import '../../assets/icon-inbox-download.svg';
import '../../assets/icon-inbox-download-hover.svg';
import { CenteredColumn } from '../helper-styles';

export const ModalContainer = styled(CenteredColumn)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2.5rem 1.5rem 1.5rem 1.5rem;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  @media screen and (min-width: 600px) {
    top: 50%;
    left: 50%;
    width: auto;
    height: auto;
    padding: 0;
    padding-top: 5rem;
    transform: translate(-50%, -50%);

    max-height: calc(100% - 1em);
    background-color: transparent;
  }
`;

export const CloseButton = styled.button`
  background-image: url('/assets/icon-close.svg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 6rem;
  width: 6rem;
  transition: transform ease-in-out 0.2s;

  @media screen and (min-width: 600px) {
    position: absolute;
    top: 0;
  }

  @media screen and (hover) {
    &:focus,
    &:hover {
      background-image: url('/assets/icon-close-hover.svg');
    }

    &:focus {
      transform: scale(1.1);
    }
  }
`;

export const DownloadImageButton = styled(CenteredColumn)`
  background-image: url('/assets/icon-inbox-download.svg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 4rem;
  width: 4rem;
  transition: transform ease-in-out 0.2s;

  @media screen and (hover) {
    &:focus,
    &:hover {
      background-image: url('/assets/icon-inbox-download-hover.svg');
    }

    &:focus {
      transform: scale(1.1);
      outline: none;
    }
  }
`;
