import React from "react";
import Index from "./store";
import { Main } from "./styles/App.styles";

import {
  TextPanel,
  GuessPanel,
  CanvasPanel,
  NotificationBanner
} from "./components";

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
