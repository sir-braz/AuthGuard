import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const validateFields = () => {
    if (!username || !password) {
      setError('Por favor, preencha todos os campos.');
      return false;
    }

    if (username.length < 3) {
      setError('O nome de usuário deve ter pelo menos 3 caracteres.');
      return false;
    }

    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.');
      return false;
    }

    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!validateFields()) {
      return;
    }

    setLoading(true);

    try {
      const userData = { username, password };
      const response = await fetch('https://api.paofacil.xyz/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa('user:d2dc2c2f-70ad-423b-adaf-48a1bb9f7b70'),
        },
        body: JSON.stringify(userData),
      });

      const contentType = response.headers.get('content-type');
      let responseData;

      if (contentType && contentType.includes('application/json')) {
        responseData = await response.json();
      } else {
        responseData = await response.text();
        throw new Error(responseData || 'Erro desconhecido');
      }

      if (!response.ok) {
        throw new Error(responseData.message || 'Erro ao registrar');
      }

      // Sucesso no registro, exibe mensagem de sucesso
      setSuccess(true);
      setTimeout(() => {
        navigate('/login');
      }, 2000); // Redireciona após 2 segundos
    } catch (err) {
      setError('Erro ao registrar. Por favor, tente novamente.');
      console.error(err); // Log do erro para debug
    } finally {
      setLoading(false);
    }
  };

  const handleGoToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="login-container">
      <div className="form-card">
        <h2 className="text-center mb-4">Registro</h2>

        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">Registro realizado com sucesso! Redirecionando...</div>}

        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Nome de Usuário</label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite seu nome de usuário"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Senha</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              required
            />
          </div>

          <button type="submit" className="btn btn-submit w-100" disabled={loading}>
            {loading ? (
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            ) : (
              'Registrar'
            )}
          </button>
        </form>

        <div className="text-center mt-3">
          <p>
            Já tem uma conta?{' '}
            <button className="btn btn-link p-0" onClick={handleGoToLogin}>
              Faça login aqui.
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;