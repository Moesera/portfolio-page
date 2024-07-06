import * as S from '../../../styled-components/App.styles';

const Nav = () => {
  return (
    <S.Nav>
      <S.Logo>Logo</S.Logo>
      <ul>
        <S.Link to="/">Portfolio</S.Link>
        <S.Link to="projects">Projects</S.Link>
        <S.Link to="about">Hire me</S.Link>
        <S.Link to="templates">Templates</S.Link>
      </ul>
    </S.Nav>
  )
}

export default Nav;