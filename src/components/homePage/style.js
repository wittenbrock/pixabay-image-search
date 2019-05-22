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
  color: hsl(0, 0%, 0%);
  background-image: linear-gradient(
    -45deg,
    hsl(14, 82%, 63%),
    hsl(337, 78%, 57%),
    hsl(196, 72%, 49%),
    hsl(166, 72%, 49%)
  );
  background-size: 400%;
  animation: ${MovingGradient} 15s ease infinite alternate;
`;
