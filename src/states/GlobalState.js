import React, { useState, useContext } from "react";

export const CATS = 'cats';
export const DOGS = 'dogs';

const other = (current) => current === CATS ? DOGS : CATS;

const initialState = {
    count: 0,
    preference: CATS
};

const selectors = (state) => ({
    getCount: () => state.count,
    getPreference: () => state.preference,
    isDogLover: () => state.preference === DOGS
});

const GlobalState = React.createContext({
    state: initialState,
    dispatch: () => {},
    selectors: {}
});

export const GlobalStateProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const dispatch = (action) => {
      switch(action.type) {
          case 'INCREMENT':
              setState({ ...state, count: state.count + 1});
              break;
          case 'DECREMENT':
              setState({ ...state, count: state.count - 1});
              break;
          case 'TOGGLE_PREFERENCE':
              setState({ ...state, preference: other(state.preference)});
              break;
          default:
              console.warn('No action type found.');
      }
  };

  const store = {
      state,
      dispatch,
      selectors: selectors(state)
  };

  return (
      <GlobalState.Provider value={store}>
          {children}
      </GlobalState.Provider>
  )
};

export const useGlobalState = () => useContext(GlobalState).state;
export const useSelector = () => useContext(GlobalState).selectors;
export const useDispatch = () => useContext(GlobalState).dispatch;
