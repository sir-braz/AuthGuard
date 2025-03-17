# PãoFácil - Sistema de Gestão para Padarias

## 📌 Visão Geral
O **PãoFácil** é um sistema desenvolvido para ajudar padarias na gestão de vendas, controle de estoque, acompanhamento de pedidos, monitoramento de sobras de pães, verificação de notas em prazo, análise de vendas e registro da folha de ponto dos funcionários. O objetivo principal é reduzir desperdícios e otimizar a administração do negócio.

## 📂 Estrutura do Projeto
O projeto está dividido em dois principais diretórios:

```
/PaoFacil
├── /frontend  # Interface do usuário (React)
├── /backend   # API e banco de dados (Java + Spring Boot)
```

Atualmente, o foco está no **frontend**, mas o **backend** está sendo desenvolvido com **Java** e **Spring Boot**, garantindo uma arquitetura escalável e de fácil manutenção.

---

## 🎨 Diretório `frontend`
O frontend é desenvolvido em **React**, seguindo uma estrutura modular e reutilizável:

```
/frontend
├── /public            # Arquivos públicos (HTML, ícones, manifest.json)
├── /src               # Código-fonte do frontend
│   ├── /components    # Componentes reutilizáveis (Navbar, Botões, Cards, etc.)
│   ├── /pages         # Páginas principais (Dashboard, Vendas, Estoque, etc.)
│   ├── /context       # Context API para gerenciamento de estado global
│   ├── /utils         # Funções auxiliares
│   ├── App.js         # Componente principal
│   ├── index.js       # Ponto de entrada do React
│   ├── routes.js      # Configuração das rotas
│   ├── styles.css     # Estilização global
└── package.json       # Dependências do projeto
```

---

## ⚙️ Diretório `backend` (Em Desenvolvimento)
O backend será desenvolvido utilizando **Java** e **Spring Boot**. Ele será responsável por armazenar e processar os dados, oferecendo uma API **RESTful** para comunicação com o frontend.

### 🔹 Tecnologias e Arquitetura
- **Spring Boot**: Desenvolvimento da API RESTful
- **MySQL**: Banco de dados relacional
- **JPA (Java Persistence API)**: Gerenciamento de persistência de dados
- **Spring Security**: Autenticação e autorização de usuários
- **Spring Data**: Simplificação do acesso ao banco de dados

### 🔹 Estrutura do Backend
```
/backend
├── /src
│   ├── /controller    # Controladores de requisições HTTP
│   ├── /model         # Modelos de dados e entidades
│   ├── /repository    # Repositórios de acesso ao banco de dados
│   ├── /service       # Lógica de negócios
│   ├── /config        # Configurações de segurança e aplicação
│   ├── /exception     # Tratamento de erros e exceções
│   └── Application.java  # Ponto de entrada da aplicação
└── pom.xml            # Gerenciamento de dependências
```

---

## 🔗 Integração entre Frontend e Backend
A comunicação entre o **frontend** e o **backend** será feita através de **requisições HTTP**, utilizando **Axios** no frontend. O backend disponibilizará endpoints RESTful para operações **CRUD** (Create, Read, Update, Delete).


## 📊 Funcionalidades Principais
✅ **Gestão de Vendas**: Registro de pedidos e análise de vendas
✅ **Controle de Estoque**: Monitoramento de produtos disponíveis
✅ **Verificação de Sobras de Pão**: Relatórios sobre produção e vendas para reduzir desperdícios
✅ **Gestão de Notas em Prazo**: Monitoramento e alertas para pagamentos pendentes
✅ **Folha de Ponto Digital**: Registro de entrada/saída de funcionários
✅ **Painel de Indicadores**: Dashboard com gráficos e estatísticas


## 🚀 Como Rodar o Projeto

### 🔹 Configuração do Ambiente
1. **Clonar o repositório**
   ```sh
   git clone https://github.com/seu-usuario/PaoFacil.git
   ```
2. **Configurar o backend:**
   - Instalar **JDK 11 ou superior** e **Maven**
   - Configurar **MySQL** com o banco de dados necessário
   - Rodar o backend com:
     ```sh
     mvn spring-boot:run
     ```

3. **Configurar o frontend:**
   - Instalar dependências
     ```sh
     cd frontend
     npm install
     ```
   - Iniciar o servidor React
     ```sh
     npm start
     ```


## 🛠️ Tecnologias Utilizadas
🔹 **Frontend**: React, Axios, Bootstrap, CSS Modules  
🔹 **Backend**: Java, Spring Boot, Spring Security, MySQL, JPA  
🔹 **Ferramentas**: Git, Docker (futuro), Swagger (futuro)



## 📌 Roadmap Futuro
📌 **Autenticação JWT** para segurança avançada  
📌 **Dashboard com Gráficos** para análise de vendas e estoque  
📌 **Notificações de Notas em Prazo** via WhatsApp/e-mail  
📌 **Monitoramento de Produção** para otimizar a fabricação de pães  
📌 **Dockerização** para facilitar a implantação  


