import { createGlobalStyle } from "styled-components";
import * as v from "./variables";

// Setting theme colors on GlobalStyle ->
// ${({theme}) => (theme ? theme.primary : defaultMode.primary)};

const GlobalStyle = createGlobalStyle`
/* General style */
/* :root {
  background-color: ${({theme}) => (theme ? theme.primary : v.defaultMode.primary)};
}; */

/* VARIABLES */
html {
  /* Light theme */
  --color-primary-light: papayawhip;
  --color-secondary-light: #BF4F74;
  --color-title-light: #333;
  --color-subtitles-light: black;
  --color-icons-light: black;
  --color-button-light: papayawhip;
  /* Dark theme */
  --color-primary-dark: #333;
  --color-secondary-dark: #BF4F74;
  --color-title-dark: #f8f8f8;
  --color-subtitles-dark: #f8f8f8;
  --color-icons-dark : #f8f8f8;
  --color-button-dark: papayawhip;
  /* Other */
}

/* * {
  box-sizing: border-box;
} */

  html, 
  body,
  #root {
    min-height: 100%;
    min-width: 100%;
    margin: 0 auto;
  }

  /* *,
  *::before,
  *::after {
    box-sizing: border-box;
  } */

  /* * {
    margin: 0;
    padding: 0;
    font: inherit;
  } */

/* Application Structure */
body {
  padding: 0;
    font-family: Arial, sans-serif;
  }

main {
  min-height: 100vh;
}

/* Footer  */
footer {
  padding: 2rem 0;
  /* background-color: ${({theme}) => (theme ? theme.primary : v.defaultMode.secondary)}; */
  text-align: center;
}

/* Page Content */
h1 {
  text-align: center;
}

/* Custom Styles */
.css-skills {
  grid-template-columns: repeat(auto-fit, minmax(calc(100% / 3), auto));
  background-color: bisque;
}

.css-skills > div {
  justify-self: center;
}


  /* Small screens */
  @media (min-width: ${({ theme }) => theme.screen.mobile}) {
  }

  /* Medium screens */
  @media (min-width: ${({ theme }) => theme.screen.tablet}) {
    .css-skills {
    grid-template-columns: repeat(auto-fit, minmax(calc(100% / 4), auto));
  }
  }

  /* Large screens */
  @media (min-width: ${({ theme }) => theme.screen.desktop}) {
    .css-skills {
    grid-template-columns: repeat(auto-fit, minmax(calc(100% / 7), 1fr));
  }
  }

  /* Extra large screens */
  @media (min-width: ${({ theme }) => theme.screen.largeDesktop}) {
    .css-skills {
    grid-template-columns: repeat(auto-fit, minmax(calc(100% / 20), 1fr));
  }
  }
`;

export default GlobalStyle;