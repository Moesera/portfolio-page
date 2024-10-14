import { useState } from "react";

import * as S from "../../styled-components/App.styles";

const Templates = () => {
  // const [count, setCount] = useState(0);

  // const counter = (prop) => {
  //   if (prop === "clear") {
  //     return setCount(0);
  //   }

  //   return setCount(count + 1);
  // };

  return (
    <>
      <h1>My templates</h1>
      {/* Page container for templates */}
      <S.CustomContainer $direction="column" $margin="0 auto" $maxWidth="70%">
        {/* Make this a component with the styled component since i am gonna use it for each wrapper of these items, if not i can change it one place */}
        <S.CustomWrapper $padding="0rem 0.7rem" $bgColor="rgba(156, 147, 96, 0.274)" $headerColor="yellow" $boxShadow="rgba(40, 39, 51, 0.19) 0px 10px 20px, rgba(40, 39, 51, 0.23) 0px 6px 6px;" $borderRadius="0.4rem">
          {/* box-shadow: */}
          <h2>React starter template</h2>
          <p>Create a box with "how to" code and link to repo.</p>
          <p>Just a starter template for react app, read more in the <a>readme.md</a> file, enjoy !</p>
        </S.CustomWrapper>
      </S.CustomContainer>
    </>
  );
};

export default Templates;