import React, { createContext, useReducer } from "react";

const initialState = {
  selected: {},
  playlist: [],
  limit: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PLAYLIST":
      return { ...state, playlist: action.payload.playlist };

    case "SET_SELECTED":
      return { ...state, selected: action.payload.selected };

    case "SET_LIMIT":
      return { ...state, limit: action.payload.limit };

    default:
      return state;
  }
};

export const Store = createContext({
  globalState: initialState,
  setGlobalState: () => null,
});

export const StoreProvider = ({ children }) => {
  const [globalState, setGlobalState] = useReducer(reducer, initialState);
  return <Store.Provider value={{ globalState, setGlobalState }}>{children}</Store.Provider>;
};
