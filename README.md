# PãoFácil - Estrutura do Projeto

## Visão Geral
**PãoFácil** é um sistema desenvolvido para a gestão de padarias, permitindo a administração de vendas, estoque, pedidos pendentes, comprovantes de vendas, relatórios, usuários e registro de presença de funcionários. O projeto é projetado para ser escalável e fácil de manter, permitindo futuras integrações e melhorias.

## Estrutura do Projeto

O projeto está dividido em dois principais diretórios:

```
/PaoFacil
├── /frontend  # Interface do usuário (React)
├── /backend   # API e banco de dados (Java + Spring Boot)
```

Atualmente, o foco está no **frontend**, mas o **backend** está sendo desenvolvido com **Java** e **Spring Boot**, garantindo uma arquitetura robusta e escalável.

### Diretório `frontend`
O **frontend** é desenvolvido em React e segue uma estrutura modular, com componentes reutilizáveis e organizados por função:

```
/frontend
├── /public            # Arquivos públicos (HTML, ícones, manifest.json)
├── /src               # Código-fonte do frontend
│   ├── /components    # Componentes reutilizáveis (Navbar, Botões, Cards, etc.)
│   │   ├── Navbar.js  # Componente Navbar
│   │   ├── Navbar.css # Estilização do componente Navbar
│   │   └── ...        # Outros componentes
│   ├── /pages         # Páginas principais (Dashboard, Vendas, Estoque, etc.)
│   ├── /context       # Context API para gerenciamento de estado global
│   ├── /utils         # Funções auxiliares
│   ├── App.js         # Componente principal
│   ├── index.js       # Ponto de entrada do React
│   ├── routes.js      # Configuração das rotas
│   ├── styles.css     # Estilização global
└── package.json       # Dependências do projeto
```

### Diretório `backend` (Futuro)
O **backend** será desenvolvido utilizando **Java** e o framework **Spring Boot**. Essa escolha tecnológica visa garantir robustez, escalabilidade e facilidade de manutenção. O backend será responsável por armazenar e processar dados, oferecendo uma API RESTful para comunicação com o frontend.

#### Tecnologias e Estrutura do Backend
- **Spring Boot**: Para o desenvolvimento do backend, aproveitando sua capacidade de criar APIs RESTful rapidamente e de maneira eficiente.
- **Banco de Dados**: O banco de dados será **MySQL**, fornecendo uma solução de banco de dados relacional para armazenar os dados do sistema.
- **JPA (Java Persistence API)**: Para interagir com o banco de dados MySQL de maneira eficiente e escalável.
- **Spring Security**: Para garantir a segurança da aplicação, autenticação e autorização de usuários.
- **Spring Data**: Para simplificar a manipulação de dados e integração com o banco de dados.

A arquitetura da aplicação seguirá o padrão **MVC (Model-View-Controller)**, com a separação de responsabilidades em camadas:

```
/backend
├── /src
│   ├── /controller    # Controladores que gerenciam as requisições HTTP
│   ├── /model         # Modelos de dados e entidades
│   ├── /repository    # Repositórios de acesso a dados
│   ├── /service       # Lógica de negócios
│   ├── /config        # Configurações de segurança e aplicação
│   ├── /exception     # Tratamento de exceções
│   └── Application.java  # Ponto de entrada da aplicação Spring Boot
└── pom.xml            # Arquivo de dependências do projeto
```

### Fluxo de Desenvolvimento do Backend

1. **Configuração do ambiente**: Instalar **JDK 11 ou superior** e **Maven** para gerenciar as dependências do projeto. Também será necessário configurar o **MySQL** para armazenar os dados da aplicação.
2. **Execução do Backend**: O backend será iniciado com o comando `mvn spring-boot:run` ou através da IDE de sua preferência.
3. **Endpoints RESTful**: A API RESTful será responsável por permitir que o frontend se comunique com o backend para persistência de dados e funcionalidades diversas.

### Integração entre Frontend e Backend
A comunicação entre o **frontend** (React) e o **backend** (Spring Boot) será feita através de **requisições HTTP** utilizando **Axios** no frontend. O backend disponibilizará **endpoints RESTful** para criar, ler, atualizar e excluir informações.

## Fluxo de Desenvolvimento

1. **Configuração do ambiente**: Instale as dependências com `npm install` dentro da pasta `frontend` e configure o **JDK**, **Maven** e **MySQL** para o **backend**.
2. **Execução do projeto**: Inicie o frontend com `npm start` e o backend com `mvn spring-boot:run`.
3. **Organização das tarefas**: Novas funcionalidades são desenvolvidas em branches separadas antes do merge na branch principal.

## Padrões de Desenvolvimento
- Utilização do **React Hooks** para gerenciamento de estado no frontend.
- Estilização com **CSS Modules e Bootstrap** no frontend.
- No **backend**, será utilizada a arquitetura **MVC** com **Spring Boot**.
- Comunicação entre frontend e backend via **API RESTful**.
- **JPA** e **Spring Data** para integração com o banco de dados **MySQL**.
- **Spring Security** para segurança e autenticação.
