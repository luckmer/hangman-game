import {
  SetGameStatus,
  SetSelectedText,
  SetRandomGuess,
  SetLives,
  SetWinnerStatus
} from "../index";
import actions from "../../actions";

const initialState = {
  selectedText: [],
  lives: 10,
  gameOver: false,
  winner: false,
  guess: ""
};

describe("SetWinnerStatus", () => {
  test("should return end game", () => {
    const updateAction = { type: actions.Set_Winner, payload: true };
    const updatedState = SetWinnerStatus(initialState, updateAction);
    expect(updatedState).toBe(true);
  });

  test("should execute clean method", () => {
    const updateAction = { type: actions.Clear_State };
    const updatedState = SetWinnerStatus(initialState, updateAction);
    expect(updatedState).toBe(false);
  });
});

describe("SetGameStatus", () => {
  test("should return true", () => {
    const updateAction = { type: actions.Set_Game_Over, payload: true };
    const updatedState = SetGameStatus(initialState, updateAction);
    expect(updatedState).toBe(true);
  });

  test("should return false", () => {
    const updateAction = { type: actions.Set_Game_Over, payload: false };
    const updatedState = SetGameStatus(initialState, updateAction);
    expect(updatedState).toBe(false);
  });

  test("should execute clean method", () => {
    const updateAction = { type: actions.Clear_State };
    const updatedState = SetGameStatus(initialState, updateAction);
    expect(updatedState).toBe(false);
  });
});

describe("SetLives", () => {
  test("should decrease lives", () => {
    const updateAction = { type: actions.Set_Live, payload: 1 };
    const updatedState = SetLives(initialState, updateAction);
    expect(updatedState).toBe(9);
  });

  test("should execute restart and return full 10 lives", () => {
    const updateAction = { type: actions.Clear_State };
    const updatedState = SetLives(initialState, updateAction);
    expect(updatedState).toBe(10);
  });
});

describe("SetRandomGuess", () => {
  test("should return random guess", () => {
    const updateAction = {
      type: actions.Set_Random_Guess,
      payload: "random word"
    };
    const updatedState = SetRandomGuess(initialState, updateAction);
    expect(updatedState).toBe("random word");
  });

  test("should return empty string", () => {
    const updateAction = {
      type: actions.Set_Random_Guess,
      payload: ""
    };
    const updatedState = SetRandomGuess(initialState, updateAction);
    expect(updatedState).toBe("");
  });
});

describe("SetSelectedText", () => {
  test("should return text", () => {
    const updateAction = {
      type: actions.Set_seletected_text,
      payload: "hey there"
    };
    const updatedState = SetSelectedText(initialState, updateAction);
    expect(updatedState).toEqual(["hey there"]);
  });

  test("should execute clean method", () => {
    const updateAction = {
      type: actions.Clear_State
    };
    const updatedState = SetSelectedText(initialState, updateAction);
    expect(updatedState).toEqual([]);
  });

  test("should empty array", () => {
    const updateAction = { type: actions.Set_Game_Over };
    const updatedState = SetSelectedText(initialState, updateAction);
    expect(updatedState).toEqual([]);
  });
});
