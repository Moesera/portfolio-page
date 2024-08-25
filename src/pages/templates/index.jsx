import { useState } from "react";

import * as S from "../../styled-components/App.styles";

const Templates = () => {
  const [count, setCount] = useState(0);

  const counter = (prop) => {
    if (prop === "clear") {
      return setCount(0);
    }

    return setCount(count + 1);
  };

  return (
    <>
      <h1>My templates</h1>
      <S.CustomContainer $direction="column" $margin="0 auto" $maxWidth="70%">
      <S.CustomWrapper>
      <h2>React starter template</h2>
      <p>Create a border with the "how to" code and link to repo.</p>
      <p>Just a starter template for react app, read more in the <a>readme.md</a> file, enjoy !</p>
      </S.CustomWrapper>
      </S.CustomContainer>
    </>
  );
};

export default Templates;