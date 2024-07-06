import { createGlobalStyle } from "styled-components";

import * as v from "./variables";

// Setting theme colors on GlobalStyle ->
// ${({theme}) => (theme ? theme.primary : defaultMode.primary)};

const GlobalStyle = createGlobalStyle`
/* General style */
:root {
  background-color: ${({theme}) => (theme ? theme.primary : v.defaultMode.primary)};
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
body,
#root,
.App {
    margin: 0;
    height: 100%;
}

#root {
display: grid;
}

/* Application Structure */
body {
  font-family: Arial, sans-serif;
}

main {
  background-color: cadetblue;
  flex-grow: 1;
}

footer {
  /* margin-bottom: auto; */
}

/* Page Content */

h1 {
  text-align: center;
}

`;

export default GlobalStyle;