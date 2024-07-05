import { createGlobalStyle } from "styled-components";
import { defaultMode } from "./App.styles";

// Setting theme colors on GlobalStyle ->
// ${({theme}) => (theme ? theme.primary : defaultMode.primary)};

const GlobalStyle = createGlobalStyle`
/* General style */
:root {
  background-color: ${({theme}) => (theme ? theme.primary : defaultMode.primary)};
};

/* VARIABLES */
html {
  /* Light theme */
  --color-primary-light: papayawhip;
  --color-secondary-light: #DBDE61;
  --color-title-light: #333;
  --color-subtitles-light: black;
  --color-icons-light: black;
  /* Dark theme */
  --color-primary-dark: #333;
  --color-secondary-dark: #DBDE61;
  --color-title-dark: #f8f8f8;
  --color-subtitles-dark: #f8f8f8;
  --color-icons-dark : #f8f8f8;
  /* Other */
}

* {
  box-sizing: border-box;
}

html,
#root,
body {
  height: 100%;
  margin: 0;
}

/* Common style */
body {
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
}

main {
flex: 1;
}

`;

export default GlobalStyle;