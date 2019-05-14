import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto');

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
  background-color: #323638;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
}

body {
  font-size: 1.6rem;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

input {
  border: 0px;
}

button {
  border: 0px;
}

textarea, select, input, button { outline: none; }

`;

export default GlobalStyles;
