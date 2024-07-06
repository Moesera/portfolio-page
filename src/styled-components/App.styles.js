import { Link as RouterLink } from 'react-router-dom';
import styled from "styled-components";

// Default colors fallback
export const defaultMode = {
  primary: 'black',
  secondary: 'grey',
  title: 'yellow',
  subtitles: 'yellow',
  icons: "yellow", 
};

// Page transition
export const transitions = {
page: 'transition: all 0.25s ease',
};

// Screen size breakpoints
export const screenSize = {
dekstop: '1440px',
tablet: '768px',
mobile: '425px',
};

export const App = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${({theme}) => (theme ? theme.primary : defaultMode.primary)};
  color: ${({theme}) => (theme ? theme.title : defaultMode.title)};
  ${transitions.page}
`;

// Main page
export const Header = styled.header`
  background: ${({theme}) => (theme ? theme.primary : defaultMode.primary)};
  ${transitions.page}
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  ul {
  display: flex;
  gap: 1rem;
  }
`;

export const Link = styled(RouterLink)`
  font-weight: bold;
  color: ${({theme}) => (theme ? theme.secondary : defaultMode.secondary)};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Footer = styled.footer`
  color: ${({theme}) => (theme ? theme.subtitles : defaultMode.subtitles)};
  background: ${({theme}) => (theme ? theme.primary : defaultMode.primary)};
  ${transitions.page}
`;

export const Logo = styled.span`
  color: #BF4F74;
  font-weight: bold;
  font-size: 1.5rem;
  text-transform: uppercase;
`;

// Wrappers:
// .div.attrs<{ $maxWidth, $margin $justify, $align, $padding }>
export const Wrapper = styled.div`
  display: flex;
  max-width: ${props => props.$maxWidth || ""};
  margin: ${props => props.$margin || ""};
  justify-content: ${props => props.$justify || ""};
  align-items: ${props => props.$align || ""};
  padding: ${props => props.$padding || ""};
`;

// Page styles
export const Title = styled.h1`
  color: ${({theme}) => (theme ? theme.title : defaultMode.title)};
`;

// STYLED COMPONENTS EXAMPLES

/**
* HOW TO CREATE A COMPONENT BASED ON AN EXCISTING BASE COMPONENT
* // export const HeaderWrapper = styled(Wrapper)`
* // justify-content: space-between;
* // align-items: center;
* // padding: 1rem 1rem;
* // `;
*/