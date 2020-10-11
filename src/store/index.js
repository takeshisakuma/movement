import React, { createContext, useReducer } from "react";

const initialState = {
  selected: {},
  playlist: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PLAYLIST":
      return { ...state, playlist: action.payload.playlist };

    case "SET_SELECTED":
      return { ...state, selected: action.payload.selected };

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
