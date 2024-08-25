import { Routes, Route } from "react-router-dom";

import * as S from "./styled-components/App.styles";
import Layout from "./components/layout/Layout";
import Home from "./pages/home";
import Templates from "./pages/templates";
import RouteNotFound from "./pages/error";
import Projects from "./pages/projects";
import Hire from "./pages/hire";

function App() {
  return (
  <S.App>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="templates" element={<Templates />} />
        <Route path="projects" element={<Projects />} />
        <Route path="hire" element={<Hire />} />
        <Route path="*" element={<RouteNotFound />} />
      </Route>
    </Routes>
  </S.App>
  );
}

export default App;
