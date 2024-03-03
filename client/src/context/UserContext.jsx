import { createContext, useEffect, useReducer } from "react";
import { AuthReducer } from "../reducer/AuthReducer.jsx"

const INTIAL_STATE = {
  user: (localStorage.getItem('user') !== undefined) ? JSON.parse(localStorage.getItem('user')) : null,
  token: localStorage.getItem('token') || null,
}

export const UserContext = createContext(INTIAL_STATE);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INTIAL_STATE);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
    localStorage.setItem('token', state.token);
  }, [state])
  return (
    <UserContext.Provider value={{ user: state.user, token: state.token, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
