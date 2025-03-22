import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TextField, Button, CircularProgress, Alert, Box, Typography } from '@mui/material';

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateFields = () => {
    if (!username || !password) {
      setError('Por favor, preencha todos os campos.');
      return false;
    }
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!validateFields()) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://api.paofacil.xyz/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        setIsAuthenticated(true);
        navigate('/home'); // Redireciona para a home
      } else {
        setError(data.message || 'Usuário ou senha inválidos!');
      }
    } catch (error) {
      setError('Erro de conexão. Verifique sua internet.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.formCard}>
        <Typography variant="h5" component="h2" sx={styles.title}>
          Login
        </Typography>

        {error && <Alert severity="error" sx={styles.alert}>{error}</Alert>}

        <form onSubmit={handleLogin}>
          <TextField
            label="Usuário"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            sx={styles.input}
          />

          <TextField
            label="Senha"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={styles.input}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={styles.submitButton}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
          </Button>
        </form>

        <Box sx={styles.registerLink}>
          <Typography variant="body2">
            Ainda não tem uma conta?{' '}
            <Link to="/register" style={styles.link}>
              Registre-se aqui
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

// Estilos utilizando Material-UI
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #6c5ce7, #ff7675)',
  },
  formCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '40px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  title: {
    marginBottom: '20px',
    fontWeight: 'bold',
    color: '#333',
  },
  alert: {
    marginBottom: '20px',
  },
  input: {
    marginBottom: '16px',
  },
  submitButton: {
    padding: '12px',
    fontWeight: 'bold',
  },
  registerLink: {
    marginTop: '20px',
  },
  link: {
    color: '#6c5ce7',
    textDecoration: 'none',
    fontWeight: '600',
  },
};

export default Login;
