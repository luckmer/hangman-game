import React, { Fragment, useReducer, createContext } from "react";

const initialState = {
  selectedText: ""
};

export const AppContext = createContext({
  state: initialState,
  dispatch: () => null
});

const reducer = (state, action) => {};

const Index = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default Index;
