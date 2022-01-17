import React from "react";
import { AppContext } from "../store";
import {
  ButtonDesign,
  Section,
  SectionDescription,
  SectionH1,
  GreySectionBackground
} from "./styles/NotificationBanner.styles";

import actions from "../store/actions";

const Button = ({ children, onClick }) => {
  const buttons = { onClick };

  return <ButtonDesign {...buttons}>{children}</ButtonDesign>;
};

const NotificationBanner = () => {
  const { state, dispatch } = React.useContext(AppContext);
  const { lives, gameOver, winner } = state;

  const handleRestartGame = () => {
    dispatch({ type: actions.Clear_State });
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
