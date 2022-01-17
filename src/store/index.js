import React, { useReducer, createContext } from "react";
import actions from "./actions";

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

const SetSelectedText = (state, action) => {
  switch (action.type) {
    case actions.Set_seletected_text: {
      const word = action.payload;

      return [...state.selectedText, word];
    }

    default:
      return state.selectedText;
  }
};

const SetRandomGuess = (state, action) => {
  switch (action.type) {
    case actions.Set_Random_Guess: {
      const word = action.payload;

      return word;
    }

    default:
      return state.guess;
  }
};

const SetLives = (state, action) => {
  switch (action.type) {
    case actions.Set_Live: {
      const counter = action.payload;

      return state.lives - counter;
    }
    default:
      return state.lives;
  }
};

const SetGameStatus = (state, action) => {
  switch (action.type) {
    case actions.Set_Game_Over:
      return action.payload;

    default:
      return state.gameOver;
  }
};

const SetWinnerStatus = (state, action) => {
  switch (action.type) {
    case actions.Set_Winner:
      return action.payload;

    default:
      return state.winner;
  }
};

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
