import React from "react";
import { AppContext } from "../store";
import api from "../api/Index";
import actions from "../store/actions";
import styled from "styled-components";

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

const GuessSection = styled.section`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  align-items: center;
`;

const GuessP = styled.p`
  font-size: 3vmin;
  padding: 0.2vmin;
  margin: 10px;
  width: 5vmin;
  height: 5vmin;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  border-bottom: 1px solid grey;
  transition: all 500ms ease;

  &:hover {
    background: black;
    color: white;
  }
`;
