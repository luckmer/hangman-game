import actions from "../actions";
import api from "../../api/Index";

export const SetSelectedText = (state, action) => {
  switch (action.type) {
    case actions.Set_seletected_text: {
      const word = action.payload;

      return [...state.selectedText, word];
    }

    case actions.Clear_State:
      return [];

    default:
      return state.selectedText;
  }
};

export const SetRandomGuess = (state, action) => {
  switch (action.type) {
    case actions.Set_Random_Guess: {
      const word = action.payload;

      return word;
    }

    case actions.Clear_State: {
      const generateRandomGuess = ~~(Math.random() * api.length);
      const randomGuess = api[generateRandomGuess];

      return randomGuess;
    }

    default:
      return state.guess;
  }
};

export const SetLives = (state, action) => {
  switch (action.type) {
    case actions.Set_Live: {
      const counter = action.payload;
      return state.lives - counter;
    }

    case actions.Clear_State:
      return 10;

    default:
      return state.lives;
  }
};

export const SetGameStatus = (state, action) => {
  switch (action.type) {
    case actions.Set_Game_Over:
      return action.payload;
    case actions.Clear_State:
      return false;

    default:
      return state.gameOver;
  }
};

export const SetWinnerStatus = (state, action) => {
  switch (action.type) {
    case actions.Set_Winner:
      return action.payload;

    case actions.Clear_State:
      return false;

    default:
      return state.winner;
  }
};
