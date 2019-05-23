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
  background: hsl(240, 2%, 20%);
  color: hsl(0, 0%, 100%);
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
  color: hsl(0, 0%, 100%);
  opacity: 1;
}

button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
}

textarea, select, input, button { outline: none; }

figure {
  margin: 0;
}

.lock-scroll {
  overflow: hidden !important;
}

`;

export default GlobalStyles;
