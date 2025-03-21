import { useState, useEffect } from 'react';
import { isAuthenticated, login, logout } from '../utils/auth';

export const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(isAuthenticated());

  useEffect(() => {
    setAuthenticated(isAuthenticated());
  }, []);

  return {
    authenticated,
    login: (token) => {
      login(token);
      setAuthenticated(true);
    },
    logout: () => {
      logout();
      setAuthenticated(false);
    },
  };
};
