import { Link as RouterLink } from 'react-router-dom';
import styled from "styled-components";

import * as v from "./variables";

// const defaultTheme = v.defaultMode;

// Application Main Structures
export const App = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({theme}) => (theme ? theme.primary : v.defaultMode.primary)};
  color: ${({theme}) => (theme ? theme.title : v.defaultMode.title)};
  ${v.transitions.page}
`;

export const Header = styled.header`
  background: ${({theme}) => (theme ? theme.primary : v.defaultMode.primary)};
  ${v.transitions.page}
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  ul {
    display: flex;
    gap: 1rem;
    li {
      list-style: none;
    }
  }
`;

export const Link = styled(RouterLink)`
  font-weight: bold;
  color: ${({theme}) => (theme ? theme.secondary : v.defaultMode.secondary)};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Footer = styled.footer`
  color: ${({theme}) => (theme ? theme.subtitles : v.defaultMode.subtitles)};
  background: ${({theme}) => (theme ? theme.primary : v.defaultMode.primary)};
  ${v.transitions.page}
`;

export const Logo = styled.span`
  color: #BF4F74;
  font-weight: bold;
  font-size: 1.5rem;
  text-transform: uppercase;
`;

// COMPONENTS

/**
 * CUSTOM WRAPPER <div>
 * A div with these available properties to adjust:
 * attrs<{ $maxWidth, $margin, $direction, $justify, $align, $padding }>
 */
export const CustomWrapper = styled.div`
  display: flex;
  max-width: ${props => props.$maxWidth || ""};
  margin: ${props => props.$margin || ""};
  justify-content: ${props => props.$justify || ""};
  flex-direction: ${props => props.$direction || ""};
  align-items: ${props => props.$align || ""};
  padding: ${props => props.$padding || ""};
`;

/**
 * CUSTOM CONTAINER <section>
 * A section with these available properties to adjust:
 * attrs<{ $maxWidth, $margin, $direction, $justify, $align, $padding }>
 */
export const CustomContainer = styled.section`
  display: flex;
  max-width: ${props => props.$maxWidth || ""};
  margin: ${props => props.$margin || ""};
  flex-direction: ${props => props.$direction || ""};
  justify-content: ${props => props.$justify || ""};
  align-items: ${props => props.$align || ""};
  padding: ${props => props.$padding || ""};
`;

// Page Content
export const Title = styled.h1`
  color: ${({theme}) => (theme ? theme.title : v.defaultMode.title)};
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