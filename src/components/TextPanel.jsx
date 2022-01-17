import React from "react";
import styled from "styled-components";
import { AppContext } from "../store/index";
import actions from "../store/actions";

const TextPanel = () => {
  const { state, dispatch } = React.useContext(AppContext);

  const alphabet = new Array(26)
    .fill("")
    .map((_, w) => String.fromCharCode(w + 97));

  const handleClickText = (word) => {
    const theSameWord = state.selectedText.some((el) => el === word);

    if (!theSameWord) {
      dispatch({
        type: actions.Set_seletected_text,
        payload: word
      });
    }
  };

  return (
    <TextContainer>
      <TextHeader>
        <div>
          <TextH3>HANGMAN</TextH3>
        </div>
      </TextHeader>

      <TextAlphabet>
        {alphabet.map((word, index) => {
          const hideText = state.selectedText.some((text) => text === word);

          return (
            <div key={index} onClick={() => handleClickText(word)}>
              <TextP hideText={hideText}>{word}</TextP>
            </div>
          );
        })}
      </TextAlphabet>
    </TextContainer>
  );
};

export default TextPanel;

const TextContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  flex-direction: column;
`;

const TextHeader = styled.header`
  text-align: center;
  padding-top: 20px;
`;

const TextH3 = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
`;

const TextAlphabet = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const TextP = styled.p`
  font-size: 4vmin;
  padding: 3.5vmin;
  margin: 1vmin;
  width: 5vmin;
  height: 5vmin;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  border-bottom: 1px solid grey;
  transition: all 500ms ease;

  background-color: ${({ hideText }) => (hideText ? "grey" : "")};
  color: ${({ hideText }) => (hideText ? "white" : "")};

  &:hover {
    background: grey;
    color: white;
  }
`;
