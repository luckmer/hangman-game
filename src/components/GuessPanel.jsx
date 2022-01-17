import React from "react";
import { AppContext } from "../store";
import api from "../api/Index";
import actions from "../store/actions";

import { GuessP, GuessSection } from "./styles/GuessPanel.styles";

const withLoader = (Element) => {
  return (props) => {
    const { state, dispatch } = React.useContext(AppContext);

    React.useEffect(() => {
      const generateRandomGuess = ~~(Math.random() * api.length);
      const randomGuess = api[generateRandomGuess];

      dispatch({
        type: actions.Set_Random_Guess,
        payload: randomGuess
      });
    }, [dispatch]);

    if (!state) {
      return <div>Loading...</div>;
    }

    return <Element {...props} data={state} />;
  };
};

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
