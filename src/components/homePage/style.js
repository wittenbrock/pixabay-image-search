import styled, { keyframes } from 'styled-components';
import { CenteredColumn } from '../helper-styles';

export const PixabayLogo = styled.img`
  width: 20rem;
  height: auto;

  @media screen and (min-width: 600px) {
    width: 28rem;
  }
`;

const MovingGradient = keyframes`
  from {background-position: 0;}
  to {background-position: 100%;}
`;

export const HomeContainer = styled(CenteredColumn)`
  width: 100vw;
  height: 100vh;
  color: black;
  background-image: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400%;
  animation: ${MovingGradient} 15s ease infinite alternate;
`;
