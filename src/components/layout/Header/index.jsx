import Nav from "../Nav";

import * as S from "../../../styled-components/App.styles";

const Header = () => {
  return (
    <S.Header>
      <S.Wrapper>
        <span>Logo</span>
        <Nav />
      </S.Wrapper>
    </S.Header>
  );
};

export default Header;
