import React from "react";
import { AppContext } from "../store";
import actions from "../store/actions";

import { TextAlphabet, TextP } from "../components/styles/TextPanel.styles";

const WithClick = ({ children }) => {
  const alphabet = new Array(26)
    .fill("")
    .map((_, w) => String.fromCharCode(w + 97));

  const { state, dispatch } = React.useContext(AppContext);

  const handleClickText = (word) => {
    if (state.lives === 0) return;

    const theSameWord = state.selectedText.some((el) => el === word);
    const words = state.guess.split("");
    const incorrectWord = words.some((element) => element === word);

    if (!incorrectWord && !theSameWord) {
      dispatch({ type: actions.Set_Live, payload: 1 });
    }

    if (!theSameWord) {
      dispatch({ type: actions.Set_seletected_text, payload: word });
    }
  };

  React.useEffect(() => {
    const gameEnd = state.lives === 0;

    gameEnd && dispatch({ type: actions.Set_Game_Over, payload: true });
  }, [state.lives, dispatch]);

  React.useEffect(() => {
    const live = state.lives;
    const words = state.guess.split("");
    const theSameWord = state.selectedText.filter((word) =>
      words.includes(word)
    );

    if (!theSameWord.length) return;

    const winner = words.every((el) => theSameWord.includes(el));

    if (winner && live > 0) {
      dispatch({ type: actions.Set_Winner, payload: true });
    }
  }, [state.selectedText, state.guess, state.lives, dispatch]);

  return (
    <React.Fragment>
      <div role="textbox">{children(state.lives)}</div>
      <TextAlphabet role="dialog">
        {alphabet.map((word, index) => {
          const hideText = state.selectedText.some((text) => text === word);
          return (
            <div key={index} onClick={() => handleClickText(word)}>
              <TextP hideText={hideText}>{word}</TextP>
            </div>
          );
        })}
      </TextAlphabet>
    </React.Fragment>
  );
};

export default WithClick;
