import * as S from '../../../styled-components/App.styles';

const Nav = () => {
  return (
    <S.Nav>
      <ul>
        <li>
        <S.Link to="/">Portfolio</S.Link>
        </li>
        <li>
        <S.Link to="projects">Projects</S.Link>
        </li>
        <li>
        <S.Link to="hire">Hire me</S.Link>
        </li>
        <li>
        <S.Link to="templates">Templates</S.Link>
        </li>
      </ul>
    </S.Nav>
  )
}

export default Nav;