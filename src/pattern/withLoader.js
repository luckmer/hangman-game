import React from "react";
import { AppContext } from "../store";
import actions from "../api/Index";
import api from "../api/Index";

const withLoader = (Element) => {
  return (props) => {
    const { state, dispatch } = React.useContext(AppContext);

    React.useEffect(() => {
      const generateRandomGuess = ~~(Math.random() * api.length);
      const randomGuess = api[generateRandomGuess];

      dispatch({
        type: actions.Set_Random_Guess,
        payload: randomGuess
      });
    }, [dispatch]);

    if (!state) {
      return <div>Loading...</div>;
    }

    return <Element {...props} data={state} />;
  };
};

export default withLoader;
