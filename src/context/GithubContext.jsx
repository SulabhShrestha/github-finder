import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

// creating context
const GithubContext = createContext();

// Creating provider
const GithubProvider = function ({ children }) {
  // for adding fetched users to local variable
  const initialState = {
    users: [], // all matched user
    isLoading: false,
    user: {}, // specific user
    repos: [],
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
export {GithubContext};
