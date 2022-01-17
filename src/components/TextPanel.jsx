import React from "react";

import { TextContainer, TextHeader, TextH3 } from "./styles/TextPanel.styles";
import WithClick from "../pattern/withClick";

const TextPanel = () => {
  return (
    <TextContainer>
      <TextHeader>
        <div>
          <TextH3>HANGMAN</TextH3>
        </div>
      </TextHeader>
      <WithClick>{(lives) => <TextH3>lives : {lives}</TextH3>}</WithClick>
    </TextContainer>
  );
};

export default TextPanel;
