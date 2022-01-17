import React, { useReducer, createContext } from "react";

import {
  SetGameStatus,
  SetSelectedText,
  SetRandomGuess,
  SetLives,
  SetWinnerStatus
} from "./reducers";

const initialState = {
  selectedText: [],
  lives: 10,
  gameOver: false,
  winner: false,
  guess: ""
};

export const AppContext = createContext({
  state: initialState,
  dispatch: () => null
});

const reducer = (state, action) => ({
  selectedText: SetSelectedText(state, action),
  guess: SetRandomGuess(state, action),
  lives: SetLives(state, action),
  gameOver: SetGameStatus(state, action),
  winner: SetWinnerStatus(state, action)
});

const Index = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default Index;
