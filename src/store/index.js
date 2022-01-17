import React, { useReducer, createContext } from "react";
import actions from "./actions";

const initialState = {
  selectedText: []
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

const reducer = (state, action) => ({
  selectedText: SetSelectedText(state, action)
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
