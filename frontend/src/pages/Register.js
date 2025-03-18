import React from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = React.useState(""); // Alterei 'name' para 'username'
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação básica
    if (!username || !password || !confirmPassword) {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    setError(""); // Limpar mensagem de erro
    setLoading(true);

    try {
      // Enviar dados para o backend
      const response = await axios.post("http://localhost:8080/api/auth/register", {
        username, // Passando o username
        password, // Passando a senha
      });

      console.log("Cadastro bem-sucedido:", response.data);
      // Após o registro, você pode redirecionar para a página de login
      window.location.href = "/login"; // Exemplo de redirecionamento para o login
    } catch (err) {
      setError("Erro ao criar conta. Tente novamente.");
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
                value={username} // Alterado para 'username'
                onChange={(e) => setUsername(e.target.value)} // Alterado para 'username'
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
              disabled={loading} // Desabilitar enquanto está carregando
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
