import styled from "styled-components";

export const TextContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  flex-direction: column;
`;

export const TextHeader = styled.header`
  text-align: center;
  padding-top: 20px;
`;

export const TextH3 = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
`;

export const TextAlphabet = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const TextP = styled.p`
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
