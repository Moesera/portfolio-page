import { Link } from "react-router-dom";

import * as S from '../../../styled-components/App.styles';

const Nav = () => {
  return (
    <S.Nav>
      <ul>
        <Link>Portfolio</Link>
        <Link>Projects</Link>
        <Link>Hire me</Link>
        <Link>Templates</Link>
      </ul>
    </S.Nav>
  )
}

export default Nav;