import Nav from "../Nav";

import * as S from "../../../styled-components/App.styles";
import { useTheme } from '../../../theme';


const Header = () => {
  const { toggleTheme, mode  } = useTheme();

  return (
    <S.Header>
      <S.Wrapper $align="center" $justify="space-between" $padding="1rem">
        <S.Logo>Logo</S.Logo>
        <Nav />
        {/* This is the beginner switch */}
        <button onClick={toggleTheme}>{mode}</button>
      </S.Wrapper>
    </S.Header>
  );
};

export default Header;
