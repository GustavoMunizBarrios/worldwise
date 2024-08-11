import { createContext, useReducer, useContext } from 'react';

const AuthContext = createContext();
const initialState = {
  user: null,
  isAuthenticated: false,
};

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'login':
      return { user: action.payload, isAuthenticated: true };

    case 'logout':
      return { user: null, isAuthenticated: false };
    default:
      throw new Error('Unknow action');
  }
};

const FAKE_USER = {
  name: 'Gustavo',
  email: 'gustavo@example.com',
  password: 'qwerty',
  avatar: 'https://i.pravatar.cc/100?u=zz',
};

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: 'login', payload: FAKE_USER });
    }
  }
  function logout() {
    dispatch({ type: 'logout' });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
}
export { AuthProvider, useAuth };
