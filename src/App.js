import React from "react";
import Index from "./store";
import styled from "styled-components";

import { TextPanel, GuessPanel } from "./components";

const Main = styled.main`
  max-width: 1000px;
  margin: auto;
  width: 100%;
`;

const App = () => {
  return (
    <Main>
      <Index>
        <TextPanel />
        <GuessPanel />
      </Index>
    </Main>
  );
};

export default App;
