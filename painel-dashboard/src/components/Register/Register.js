import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Adicionando estado de carregamento
  const [success, setSuccess] = useState(false); // Novo estado para controlar sucesso
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false); // Reseta o estado de sucesso ao tentar um novo registro
    setLoading(true); // Ativa o carregamento

    // Dados a serem enviados para a API
    const userData = {
      username: username,
      password: password,
    };

    try {
      // Envia a requisição POST para a API de registro
      const response = await fetch('http://www.paofacil.xyz/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Autenticação básica com base64
          'Authorization': 'Basic ' + btoa('user:d2dc2c2f-70ad-423b-adaf-48a1bb9f7b70'),
        },
        body: JSON.stringify(userData),
      });

      // Verifica o tipo de conteúdo retornado
      const contentType = response.headers.get('Content-Type');

      // Se a resposta for JSON, analisa como JSON
      if (response.ok && contentType && contentType.includes('application/json')) {
        const responseBody = await response.json();
        setSuccess(true); // Marca como sucesso
        console.log(responseBody);  // Log do corpo da resposta para verificar o que a API está retornando
      } else if (response.ok) {
        // Se a resposta não for JSON, trata como texto simples
        const errorText = await response.text();
        console.error("Erro de requisição:", errorText);  // Exibe o erro completo no console
        setError(errorText || 'Erro ao registrar usuário!');
      } else {
        // Caso o status da resposta não seja 2xx (sucesso), pega a resposta em texto para debug
        const errorText = await response.text();
        console.error("Erro de requisição:", errorText);  // Exibe o erro completo no console
        setError('Erro ao registrar usuário! Status: ' + response.status);
      }
    } catch (error) {
      // Exibe erro caso a requisição falhe
      console.error("Erro de rede:", error);
      setError('Erro de rede: ' + error.message);
    } finally {
      setLoading(false);  // Desativa o carregamento
    }
  };

  return (
    <Container className="register-container">
      <Row className="justify-content-center">
        <Col md={6} lg={4} className="register-col">
          <div className="form-card">
            <h2 className="text-center">Registrar</h2>
            
            {/* Exibe a mensagem de sucesso, se houver */}
            {success && <div className="alert alert-success">Registro bem-sucedido! Agora, faça login.</div>}
            {error && <div className="alert alert-danger">{error}</div>}

            <Form onSubmit={handleRegister}>
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
                className="w-100 mt-3 btn-submit" 
                disabled={loading} // Desabilita o botão se estiver carregando
              >
                {loading ? (
                  <>
                    <Spinner animation="border" size="sm" /> Registrando...
                  </>
                ) : (
                  'Registrar'
                )}
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
