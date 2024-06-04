import { useState } from "react";

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
      <section>
        <h2>Template Includes:</h2>
      </section>
      <section>
        <ul>
          <li>Styled-components & basic setup</li>
          <li>React-router-dom</li>
          <li>Redux/toolkit</li>
          <li>Layout folder & file setup</li>
          <li>Basic folder setup</li>
        </ul>
      </section>
      <section>
        <h2>Basic useSatet example:</h2>
        <button onClick={() => counter("count")}>
          Counter is currently {count}
        </button>
        <button onClick={() => counter("clear")}>Clear Count</button>
      </section>
    </>
  );
};

export default Templates;