import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import bookReducer from '../helper/bookReducer';
import { initialState } from '../helper/constant';

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [state, dispatch] = useReducer(bookReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.any
};
