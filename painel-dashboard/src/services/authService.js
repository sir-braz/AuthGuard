// src/services/authService.js
export const login = (username, password) => {
    // Aqui, você pode integrar com uma API de backend para verificar as credenciais
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    return false;
  };
  
  export const logout = () => {
    localStorage.removeItem('isAuthenticated');
  };
  
  export const isAuthenticated = () => {
    return localStorage.getItem('isAuthenticated') === 'true';
  };
  