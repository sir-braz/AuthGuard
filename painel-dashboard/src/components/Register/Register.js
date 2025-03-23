import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TextField, Button, CircularProgress, Alert, Box, Typography } from '@mui/material';

const Register = () => {
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

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!validateFields()) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://api.zerosobraxzy.xyz/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/login'); // Redireciona para a página de login após registro
      } else {
        setError(data.message || 'Erro ao registrar o usuário!');
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
          Registro
        </Typography>

        {error && <Alert severity="error" sx={styles.alert}>{error}</Alert>}

        <form onSubmit={handleRegister}>
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
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Registrar'}
          </Button>
        </form>

        <Box sx={styles.loginLink}>
          <Typography variant="body2">
            Já tem uma conta?{' '}
            <Link to="/login" style={styles.link}>
              Faça login aqui
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
  loginLink: {
    marginTop: '20px',
  },
  link: {
    color: '#6c5ce7',
    textDecoration: 'none',
    fontWeight: '600',
  },
};

export default Register;
