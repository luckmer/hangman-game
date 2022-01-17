import React from "react";
import Index from "./store";
import styled from "styled-components";

import {
  TextPanel,
  GuessPanel,
  CanvasPanel,
  NotificationBanner
} from "./components";

const Main = styled.main`
  max-width: 1000px;
  margin: auto;
  width: 100%;
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const App = () => {
  return (
    <Main>
      <Index>
        <TextPanel />
        <GuessPanel />
        <CanvasPanel />
        <NotificationBanner />
      </Index>
    </Main>
  );
};

export default App;
