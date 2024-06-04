import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* Page size */
:root {
  background-color: #119821;
};

* {
  box-sizing: border-box;
}

html,
#root,
body {
  height: 100%;
}

#root {
  display: flex;
  flex-direction: column;
}

main, body {
  margin: 0;
}

/* General style */
body {
  font-family: Arial, sans-serif;
  background-color: #f8f8f8;
  color: #333;
}

main {
flex: 1;
}

`;

export default GlobalStyle;