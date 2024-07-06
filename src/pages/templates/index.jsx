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
      <h1>Basic starter template</h1>
      <S.CustomContainer $direction="column">
        <h2>Template Includes:</h2>
        <ul>
          <li>Styled-components & basic setup</li>
          <li>React-router-dom</li>
          <li>Redux/toolkit (easy to switch for another option)</li>
          <li>Layout folder & file setup</li>
          <li>Basic folder setup</li>
          <li>babel styled components plugin and config</li>
        </ul>
      </S.CustomContainer>
      <S.CustomContainer>
        <h2>Basic useSatet example:</h2>
        <button onClick={() => counter("count")}>
          Counter is currently {count}
        </button>
        <button onClick={() => counter("clear")}>Clear Count</button>
      </S.CustomContainer>
    </>
  );
};

export default Templates;