import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if ((username === 'admin' && password === 'admin123') || (username === 'user' && password === 'admin')) {
      localStorage.setItem('token', 'fake-token');
      setIsAuthenticated(true);
      navigate('/home');
    } else {
      setError('Usuário ou senha inválidos!');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (name && email && password) {
      localStorage.setItem('token', 'fake-token');
      setIsAuthenticated(true);
      navigate('/home');
    } else {
      setError('Por favor, preencha todos os campos!');
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={4}>
          <h2>{isRegistering ? 'Registro' : 'Login'}</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <Form onSubmit={isRegistering ? handleRegister : handleLogin}>
            {isRegistering && (
              <Form.Group controlId="formBasicName">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
            )}

            {isRegistering && (
              <Form.Group controlId="formBasicEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
            )}

            <Form.Group controlId="formBasicUsername">
              <Form.Label>Usuário</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu usuário"
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

            <Button variant="primary" type="submit" className="w-100 mt-3">
              {isRegistering ? 'Registrar' : 'Login'}
            </Button>

            <Button
              variant="link"
              className="w-100 mt-2"
              onClick={() => setIsRegistering(!isRegistering)}
            >
              {isRegistering ? 'Já tem uma conta? Faça login' : 'Não tem uma conta? Registre-se'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
