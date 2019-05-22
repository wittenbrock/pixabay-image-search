import styled from 'styled-components';
import '../../assets/icon-close.svg';
import '../../assets/icon-close-hover.svg';
import '../../assets/icon-inbox-download.svg';
import '../../assets/icon-inbox-download-hover.svg';
import { CenteredColumn } from '../helper-styles';

export const StyledFigure = styled.figure`
  display: none;

  @media screen and (hover) {
    display: initial;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: hsla(0, 0%, 0%, 0.6);
  }
`;

export const StyledDiv = styled(CenteredColumn)`
  position: fixed;
  padding-top: 6rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

  &:hover {
    background-image: url('/assets/icon-close-hover.svg');
  }
`;

export const DownloadLargeImage = styled(CenteredColumn)`
  background-image: url('/assets/icon-inbox-download.svg');
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 1rem;
  height: 5rem;
  width: 5rem;

  &:hover {
    background-image: url('/assets/icon-inbox-download-hover.svg');
  }
`;
