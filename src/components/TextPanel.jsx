import React from "react";
import styled from "styled-components";

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

  &:hover {
    background: black;
    color: white;
  }
`;

const TextPanel = () => {
  const alphabet = new Array(26)
    .fill("")
    .map((_, w) => String.fromCharCode(w + 97));

  return (
    <TextContainer>
      <TextHeader>
        <div>
          <TextH3>HANGMAN</TextH3>
        </div>
      </TextHeader>

      <TextAlphabet>
        {alphabet.map((word, index) => (
          <div key={index}>
            <TextP>{word}</TextP>
          </div>
        ))}
      </TextAlphabet>
    </TextContainer>
  );
};

export default TextPanel;
