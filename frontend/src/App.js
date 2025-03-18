import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import NavigationBar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home.js";
import Register from "./pages/Register.js";

function App() {
  // Verifica se o usuário está logado (se existe um usuário salvo no localStorage)
  const isAuthenticated = !!localStorage.getItem("user");

  // Estado para controlar a exibição da Navbar
  const [showNavbar, setShowNavbar] = useState(false);

  // Efeito para monitorar a autenticação (após login, exibe a navbar)
  useEffect(() => {
    if (isAuthenticated) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  }, [isAuthenticated]);

  return (
    <Router>
      {/* Exibe a Navbar somente se o usuário estiver autenticado */}
      {showNavbar && <NavigationBar />}

      <div className="container mt-4">
        <Routes>
          {/* Página inicial protegida (só acessa se estiver logado) */}
          <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />

          {/* Página de Login acessível para todos */}
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          {/* Rota de fallback (caso o usuário tente acessar algo inválido) */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
