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
  background: #f6f6f6;
  color: black;
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

::placeholder {
  color: white;
  opacity: 1;
}

button {
  border: 0px;
}

textarea, select, input, button { outline: none; }

figure {
  margin: 0;
}

`;

export default GlobalStyles;
