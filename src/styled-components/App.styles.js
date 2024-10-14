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
  display: flex;
  justify-content: space-between;
  background: ${({theme}) => (theme ? theme.primary : v.defaultMode.primary)};
  ${v.transitions.page}
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  ul {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    padding: 0;
    li {
      list-style: none;
    }
  }
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.2rem 0.3rem;
  border: 0.2rem solid transparent;
  border-radius: 0.15rem;
  color: ${({theme}) => (theme ? theme.subtitles : v.defaultMode.subtitles)};
  background: ${({theme}) => (theme ? theme.secondary : v.defaultMode.secondary)};

  &:hover {
    background-color: ${({theme}) => (theme ? theme.title : v.defaultMode.title)};
    color: ${({theme}) => (theme ? theme.primary : v.defaultMode.primary)};
  }
`;

export const Footer = styled.footer`
  color: ${({theme}) => (theme ? theme.subtitles : v.defaultMode.subtitles)};
  /* background: ${({theme}) => (theme ? theme.primary : v.defaultMode.primary)}; */
  ${v.transitions.page}
`;

export const Logo = styled.span`
  color: #BF4F74;
  font-weight: bold;
  font-size: 1.5rem;
  text-transform: uppercase;
`;

export const SkillIcon = styled.img`
  color: ${({theme}) => (theme ? theme.subtitles : v.defaultMode.subtitles)};
  width: 50px;
  height: 50px;
  margin: 10px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

/**
 * I need to crteate a container for the theme button, add a transition and use content inside the button to change the emoji on click.
 * I it needs to slowly transition to a sun while moving, and a moon while moving back.
 * Is this achievable with css, is it possible to use this with an icon or SVG.. I want to create a beutifull theme button myself for everyone else to use.
 * Time consuming, but fun.
 */

// Step 1: create a container to hold the button transition and contents
// Step 2: create f.eks the sun and its background.
// Step 3: create the moon and its background.
// Step 4: create the transition effect on click.

export const ThemeButton = styled.button`
cursor: pointer;
background: ${({theme}) => (theme ? theme.secondary : v.defaultMode.secondary)};
border: 0.2rem solid transparent;
box-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.2);
border-radius: 100%;
padding: 1rem;

&::before {
  content: "🌙";
  width: 100%;
    display: block;
    text-align: center;
    transition: transform 0.3s ease, content 0.3s ease;
}

&:hover::before {
    content: "☀️"; // Change the emoji on hover
    transform: rotate(360deg); // Add a rotation effect on hover
  }
`;

// COMPONENTS

/**
 * CUSTOM WRAPPER <div>
 * A div with - available properties:
 * attrs<{$displayType, $flexFlow, $maxWidth, $margin, $padding, $borderRadius, $direction, $justify, $align, $bgColor, $headerColor, $boxShadow }>
 */
export const CustomWrapper = styled.div`
  display: ${props => props.$displayType || ""};
  flex-flow: ${props => props.$flexFlow || ""};
  justify-content: ${props => props.$justify || ""};
  flex-direction: ${props => props.$direction || ""};
  align-items: ${props => props.$align || ""};
  max-width: ${props => props.$maxWidth || ""};
  margin: ${props => props.$margin || ""};
  padding: ${props => props.$padding || ""};
  border-radius: ${props => props.$borderRadius || ""};
  background: ${props => props.$bgColor || ""};
  box-shadow: ${props => props.$boxShadow || ""};

  & h2 {
    color: ${props => props.$headerColor || ""};
  }
`;

/**
 * CUSTOM CONTAINER <section>
 * A section with these available properties to adjust:
 * attrs<{ $maxWidth, $minWidth, $margin, $direction, $flexWrap, $justify, $align, $padding}>
 */
export const CustomContainer = styled.section`
  display: flex;
  background-color: aliceblue;
  max-width: ${props => props.$maxWidth || ""};
  min-width: ${props => props.$minWidth || ""};
  margin: ${props => props.$margin || ""};
  flex-direction: ${props => props.$direction || ""};
  flex-wrap: ${props => props.$flexWrap || ""};
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