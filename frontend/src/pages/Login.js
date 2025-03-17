import React from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validação simples
    if (!email || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    setError("");
    // Lógica de login aqui (ex: chamada à API)
    console.log("Email:", email, "Senha:", password);
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
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

            <Button variant="primary" type="submit" className="w-100 mb-3 btn-primary">
              Entrar
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