// imports
import { useContext } from 'react';
import { FloraContext } from '../context/FloraContext';

export const useFloraContext = () => {
  const context = useContext(FloraContext);

  if (!context) {
    throw Error('useFloraContext must be used inside an FloraContextProvider');
  }

  return context;
};
