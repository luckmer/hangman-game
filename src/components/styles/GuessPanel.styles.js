import styled from "styled-components";

export const GuessSection = styled.section`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  align-items: center;
  height: 100%;
`;

export const GuessP = styled.p`
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
