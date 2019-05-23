import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ScreenReaderOnly, CenteredColumn } from '../helper-styles';
import '../../assets/icon-home.svg';

const HomeLink = styled(Link)`
  display: block;
  background-image: url('/assets/icon-home.svg');
  height: 4rem;
  width: 4rem;
  margin-top: 5rem;
  transition: transform ease-in-out 0.2s;

  @media screen and (hover) {
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const NoMatch = () => (
  <CenteredColumn>
    <h1>404 - Page not found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <HomeLink to="/">
      <ScreenReaderOnly>Return to the home page</ScreenReaderOnly>
    </HomeLink>
  </CenteredColumn>
);

export default NoMatch;
