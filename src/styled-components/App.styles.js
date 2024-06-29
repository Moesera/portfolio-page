import { Link as RouterLink } from 'react-router-dom';
import styled from "styled-components";

// Default colors fallback
export const defaultMode = {
  primary: 'red',
};

// Main page
export const Header = styled.header`
background: ${({theme}) => (theme ? theme.primary : defaultMode.primary)};
`;

export const Nav = styled.nav`
background: grey;
ul, Link {
  color: white;
  text-decoration: none;
}
`;

export const Link = styled(RouterLink)`
  color: white;
  text-decoration: none;
`;

export const Footer = styled.footer`
background: papayawhip;
`;

export const Logo = styled.span`
color: #BF4F74;
font-weight: bold;
font-size: 1.5rem;
text-transform: uppercase;
`;

// Wrappers
// .div.attrs<{ $justify, $align, $padding }>
export const Wrapper = styled.div`
display: flex;
justify-content: ${props => props.$justify || ""};
align-items: ${props => props.$align || ""};
padding: ${props => props.$padding || ""};
`;

/**
* HOW TO CREATE A COMPONENT BASED ON AN EXCISTING BASE COMPONENT
* Example:
* // export const HeaderWrapper = styled(Wrapper)`
* // justify-content: space-between;
* // align-items: center;
* // padding: 1rem 1rem;
* // `;
*/

// Page styles
export const Title = styled.h1`
color: #BF4F74;
`;

