import React from "react";
import { AppContext } from "../store";
import api from "../api/Index";

const GuessPanel = () => {
  const { state } = React.useContext(AppContext);
  const selectedWords = state.selectedText;

  React.useEffect(() => {
    const generateRandomGuess = ~~(Math.random() * api.length);
    const randomGuess = api[generateRandomGuess];
    console.log(randomGuess);
  }, []);

  return <div>home</div>;
};

export default GuessPanel;
