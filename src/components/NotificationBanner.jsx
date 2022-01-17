import React from "react";
import { AppContext } from "../store";
import {
  Section,
  SectionDescription,
  SectionH1,
  GreySectionBackground
} from "./styles/NotificationBanner.styles";

import Button from "../pattern/Button";
import actions from "../store/actions";

const NotificationBanner = () => {
  const { state, dispatch } = React.useContext(AppContext);
  const { lives, gameOver, winner } = state;

  const handleRestartGame = () => {
    const original = {
      selectedText: [],
      lives: 10,
      gameOver: false,
      winner: false,
      guess: ""
    };

    const comparable = (o) =>
      typeof o != "object" || !o
        ? o
        : Object.keys(o)
            .sort()
            .reduce((c, key) => ((c[key] = comparable(o[key])), c), {});

    const moved =
      JSON.stringify(comparable(state)) ===
      JSON.stringify(comparable(original));

    if (!moved) dispatch({ type: actions.Clear_State });
  };

  const status = lives === 0 || gameOver || winner;

  return (
    status && (
      <Section>
        <SectionDescription>
          <SectionH1>Game Over</SectionH1>
          <Button onClick={() => handleRestartGame()}>Play Again</Button>
        </SectionDescription>
        <GreySectionBackground />
      </Section>
    )
  );
};

export default NotificationBanner;
