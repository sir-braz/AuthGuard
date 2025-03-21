import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Spinner } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const userData = { username, password };

    try {
      const response = await fetch('http://www.paofacil.xyz/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const responseBody = await response.json();

      if (response.ok) {
        // Armazenando o token no localStorage
        localStorage.setItem('token', responseBody.token);

        setIsAuthenticated(true);
        navigate('/home'); // Redireciona para a página inicial
      } else {
        setError(responseBody.message || 'Usuário ou senha inválidos!');
      }
    } catch (error) {
      setError('Erro de rede: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="login-container">
      <Row className="justify-content-center">
        <Col md={6} lg={4} className="login-col">
          <div className="form-card">
            <h2 className="text-center mb-4">Login</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Usuário</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite seu nome de usuário"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button 
                variant="primary" 
                type="submit" 
                className="w-100 mt-4 btn-submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner animation="border" size="sm" /> Entrando...
                  </>
                ) : (
                  'Login'
                )}
              </Button>
            </Form>

            {/* Link para a página de registro */}
            <div className="text-center mt-3">
              <span>Ainda não tem uma conta?</span>{' '}
              <Link to="/register">Registre-se aqui</Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
