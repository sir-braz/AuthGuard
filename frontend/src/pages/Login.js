import React from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = React.useState(""); // Alterado de email para username
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false); // Estado de carregamento

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      // Enviar os dados de login para a API com o username
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        username, // Alterado para username
        password,
      });

      // Sucesso, armazenar token ou redirecionar o usuário
      console.log("Login bem-sucedido:", response.data);
      // Exemplo de armazenamento de token
      localStorage.setItem("authToken", response.data.token);
      // Redirecionar para página principal após login (ajuste conforme necessário)
      window.location.href = "/home"; // Exemplo de redirecionamento
    } catch (err) {
      setError("Nome de usuário ou senha incorretos. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      fluid
      className="gradient-background d-flex justify-content-center align-items-center vh-100"
    >
      <Card className="login-card">
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nome de usuário</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu nome de usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Alterado para username
                className="form-control"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100 mb-3"
              disabled={loading} // Desabilitar botão enquanto o login é processado
            >
              {loading ? "Carregando..." : "Entrar"}
            </Button>

            <div className="text-center">
              <a href="#recuperar-senha" className="forgot-password-link">
                Esqueci a senha
              </a>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
