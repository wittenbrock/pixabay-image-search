import React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import App from './components/app';
import GlobalStyles from './components/global-styles';

const Root = () => (
  <>
    <Normalize />
    <GlobalStyles />
    <App />
  </>
);

ReactDOM.render(<Root />, document.getElementById('root'));
