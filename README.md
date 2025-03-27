# 🌙 **LunarSchool – Sistema de Gestão Escolar**

O **LunarSchool** é uma plataforma completa para a gestão escolar, desenvolvida para facilitar a administração de alunos, professores, turmas, notas, frequência e outras atividades acadêmicas. Com uma interface moderna e intuitiva, o LunarSchool garante eficiência e segurança na gestão de uma escola.

## 🚀 **Funcionalidades**

- **Cadastro de Alunos:** Registre e gerencie informações pessoais, histórico e matrícula dos alunos.
- **Cadastro de Professores:** Controle dados dos professores, horários e disciplinas.
- **Gestão de Turmas:** Crie e gerencie turmas, atribuindo professores e definindo horários.
- **Lançamento de Notas:** Permite que os professores lancem e acompanhem as notas dos alunos.
- **Controle de Frequência:** Registre a presença e ausência dos alunos, gerando relatórios de frequência.
- **Relatórios Acadêmicos:** Gere relatórios detalhados sobre desempenho dos alunos, frequência e histórico.
- **Acesso para Pais/Responsáveis:** Permita que pais e responsáveis acompanhem o desempenho e boletim dos alunos.

## 📁 **Estrutura do Projeto**

```
/LunarSchool
├── /frontend      # React (Dashboard para Administradores, Professores e Pais)
├── /backend       # Spring Boot (API de Gestão Escolar)
├── /mobile        # Flutter (Versão Mobile – Em Desenvolvimento)
└── /docs          # Documentação e Requisitos
```

## 🔧 **Tecnologias Utilizadas**

- **Frontend:** React.js, TypeScript, Axios, TailwindCSS
- **Backend:** Java 17+, Spring Boot (Spring Security, JWT, Spring Data JPA, Flyway)
- **Banco de Dados:** PostgreSQL
- **Infraestrutura:** Docker

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

| ID   | Descrição                                             | Prioridade |
|------|-------------------------------------------------------|------------|
| RF01 | Cadastro e gerenciamento de alunos                  | 🔴 Alta    |
| RF02 | Cadastro e gerenciamento de professores             | 🔴 Alta    |
| RF03 | Cadastro e controle de turmas e disciplinas         | 🔴 Alta    |
| RF04 | Lançamento e acompanhamento de notas                | 🔴 Alta    |
| RF05 | Registro de presença e controle de frequência       | 🔴 Alta    |
| RF06 | Geração de relatórios acadêmicos detalhados         | 🔴 Alta    |
| RF07 | Acesso para pais/responsáveis visualizarem o boletim  | 🟡 Média   |

### 🔹 **Requisitos Não Funcionais (RNF)**

| ID    | Descrição                                              | Prioridade |
|-------|--------------------------------------------------------|------------|
| RNF01 | Sistema acessível via web e mobile                     | 🔴 Alta    |
| RNF02 | Backend desenvolvido com Spring Boot para escalabilidade | 🔴 Alta |
| RNF03 | Segurança robusta para proteção dos dados pessoais e acadêmicos | 🔴 Alta |
| RNF04 | Tempo de resposta inferior a 2 segundos                | 🟡 Média   |

## 📌 **Casos de Uso**

### 1️⃣ **Cadastro de Alunos**

**Ator:** Administrador  
**Fluxo:**  
1. O administrador acessa o painel do LunarSchool.
2. Seleciona a opção "Cadastrar Aluno".
3. Preenche os dados pessoais, informações de matrícula e atribui o aluno a uma turma.
4. O sistema salva os dados e confirma o cadastro.

### 2️⃣ **Lançamento de Notas**

**Ator:** Professor  
**Fluxo:**  
1. O professor realiza login no sistema.
2. Acessa a turma correspondente e seleciona a disciplina.
3. Lança as notas dos alunos.
4. O sistema atualiza o histórico acadêmico dos alunos e gera relatórios.
