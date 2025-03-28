# 🔐 **AuthGuard – Sistema de Autenticação**

O **AuthGuard** é um sistema robusto de autenticação, projetado para fornecer segurança e eficiência no gerenciamento de acessos. Ele inclui funcionalidades essenciais como registro, login e logout, garantindo que apenas usuários autorizados possam acessar sistemas e serviços.

## 🚀 **Funcionalidades**

- **Registro de Usuários:** Permite que novos usuários criem contas com credenciais seguras.
- **Login Seguro:** Autenticação de usuários com verificação de credenciais.
- **Logout:** Finaliza a sessão do usuário de forma segura.
- **Proteção com JWT:** Utiliza tokens JWT para autenticação segura e persistente.
- **Controle de Sessão:** Implementa expiração e renovação de tokens.
- **Validação de Credenciais:** Verificação de senhas com hashing para maior segurança.

## 📁 **Estrutura do Projeto**

```
/AuthGuard
├── /frontend      # Interface de Usuário (React ou Angular)
├── /backend       # API de Autenticação (Java/Spring Boot)
└── /docs          # Documentação do sistema
```

## 🔧 **Tecnologias Utilizadas**

- **Frontend:** React.js ou Angular para interface do usuário.
- **Backend:** Java com Spring Boot.
- **Banco de Dados:** PostgreSQL para armazenar informações de usuários.
- **Autenticação:** JWT para controle de sessão e bcrypt para hashing de senhas.
- **Infraestrutura:** Docker para conteinerização e serviços em cloud para escalabilidade.

## ⚙️ **Instalação e Configuração**

### 🖥️ **Backend**

```bash
cd backend
./mvnw spring-boot:run
```

### 🌐 **Frontend**

```bash
cd frontend
npm install
npm start
```

## 📊 **Requisitos**

### 🔹 **Requisitos Funcionais (RF)**

| ID   | Descrição                                              | Prioridade |
|------|----------------------------------------------------|------------|
| RF01 | Registro de usuários                              | 🔴 Alta    |
| RF02 | Login de usuários                                | 🔴 Alta    |
| RF03 | Logout seguro                                    | 🔴 Alta    |
| RF04 | Proteção de rotas com autenticação JWT        | 🔴 Alta    |
| RF05 | Validação de credenciais e hashing de senhas  | 🔴 Alta    |

### 🔹 **Requisitos Não Funcionais (RNF)**

| ID    | Descrição                                               | Prioridade |
|-------|---------------------------------------------------|------------|
| RNF01 | Plataforma responsiva e compatível com diferentes dispositivos | 🔴 Alta    |
| RNF02 | Segurança robusta com proteção contra ataques comuns      | 🔴 Alta    |
| RNF03 | Tempo de resposta eficiente para autenticação       | 🔴 Alta    |
| RNF04 | Armazenamento seguro das senhas                   | 🔴 Alta    |


