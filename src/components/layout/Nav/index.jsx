import * as S from '../../../styled-components/App.styles';

const Nav = () => {
  return (
    <S.Nav>
      <S.Logo>Logo</S.Logo>
      <ul>
        <S.Link>Portfolio</S.Link>
        <S.Link>Projects</S.Link>
        <S.Link>Hire me</S.Link>
        <S.Link>Templates</S.Link>
      </ul>
    </S.Nav>
  )
}

export default Nav;