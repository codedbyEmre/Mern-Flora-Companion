// imports
import { createContext, useReducer } from 'react';

export const FloraContext = createContext();

export const FloraReducer = (state, action) => {
  switch (action.type) {
    case 'LIST_FLORAS':
      return {
        floras: action.payload
      };
    case 'ADD_FLORA':
      return {
        floras: [action.payload, ...state.floras]
      };
    case 'EDIT_FLORA':
      const editedFloras = state.floras.map(flora => {
        if (flora._id === action.payload._id) {
          return { ...flora, ...action.payload };
        }
        return flora;
      });

      return { ...state, floras: editedFloras };
    case 'DELETE_FLORA':
      return {
        floras: state.floras.filter(flora => flora._id !== action.payload._id)
      };
    default:
      return state;
  }
};

export const FloraContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FloraReducer, {
    floras: null
  });

  return <FloraContext.Provider value={{ ...state, dispatch }}>{children}</FloraContext.Provider>;
};
