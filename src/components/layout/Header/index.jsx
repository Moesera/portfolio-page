import Nav from "../Nav";

import * as S from "../../../styled-components/App.styles";
import { useTheme } from '../../../theme';


const Header = () => {
  const { toggleTheme, mode  } = useTheme();

  return (
    <S.Header>
      {/* Theme switch */}
      <S.CustomContainer $padding="0.5rem 0rem" $minWidth="90%" $margin="0 auto" $justify="space-between">
        <S.CustomWrapper $displayType="flex" $justify="center" $padding="0.5rem 0rem">
          <S.Logo>Logo</S.Logo>
        </S.CustomWrapper>
        <S.CustomContainer $padding="0.5rem 0rem">
          <Nav />
          <S.CustomWrapper $displayType="flex" $padding="0.5rem 1rem" $justify="flex-end">
            <S.ThemeButton onClick={toggleTheme}></S.ThemeButton>
          </S.CustomWrapper >
        </S.CustomContainer>
      </S.CustomContainer>
    </S.Header>
  );
};

export default Header;
