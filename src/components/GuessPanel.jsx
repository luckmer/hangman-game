import React from "react";
import withLoader from "../pattern/withLoader";

import { GuessP, GuessSection } from "./styles/GuessPanel.styles";

const GuessPanel = ({ data }) => {
  const selectedWords = data.selectedText;
  const randomGuess = data.guess.split("");

  return (
    <GuessSection>
      {randomGuess.map((word, index) => {
        return selectedWords.some((el) => el === word) ? (
          <div key={index}>
            <GuessP>{word}</GuessP>
          </div>
        ) : (
          <div key={index}>
            <GuessP></GuessP>
          </div>
        );
      })}
    </GuessSection>
  );
};

export default withLoader(GuessPanel);
