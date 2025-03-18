import React from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL, API_ENDPOINTS } from "../config/api.config";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password || !confirmPassword) {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        `${API_BASE_URL}${API_ENDPOINTS.AUTH.REGISTER}`,
        {
          username,
          password,
        }
      );

      console.log("Cadastro bem-sucedido:", response.data);
      navigate("/login");
    } catch (err) {
      console.error("Erro no registro:", err.response?.data || err.message);
      setError(
        err.response?.data?.message || 
        "Erro ao criar conta. Por favor, tente novamente."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      fluid
      className="gradient-background d-flex justify-content-center align-items-center vh-100"
    >
      <Card className="register-card">
        <Card.Body>
          <h2 className="text-center mb-4">Cadastro</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nome de Usuário</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu nome de usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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

            <Form.Group className="mb-3">
              <Form.Label>Confirme a Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirme sua senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="form-control"
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100 mb-3"
              disabled={loading}
            >
              {loading ? "Carregando..." : "Cadastrar"}
            </Button>

            <div className="text-center">
              <a href="/login" className="forgot-password-link">
                Já tenho uma conta. Fazer login
              </a>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Register;
