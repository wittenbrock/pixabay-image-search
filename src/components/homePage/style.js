import styled, { keyframes } from 'styled-components';
import { CenteredColumn } from '../helper-styles';

const colorChange = keyframes`
  0%   {background: red;}
  25%  {background: yellow;}
  50%  {background: blue;}
  75%  {background: green;}
  100% {background: red;}
`;

export const HomeContainer = styled(CenteredColumn)`
  width: 100vw;
  height: 100vh;
  animation: ${colorChange} 50s infinite;
`;

export const PixabayLogo = styled.img`
  width: 20rem;
  height: auto;
`;
