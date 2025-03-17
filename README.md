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



## 📊 Funcionalidades Principais
✅ **Gestão de Vendas**: Registro de pedidos e análise de vendas  
✅ **Controle de Estoque**: Monitoramento de produtos disponíveis  
✅ **Verificação de Sobras de Pão**: Relatórios sobre produção e vendas para reduzir desperdícios  
✅ **Gestão de Notas em Prazo**: Monitoramento e alertas para pagamentos pendentes  
✅ **Folha de Ponto Digital**: Registro de entrada/saída de funcionários  
✅ **Painel de Indicadores**: Dashboard com gráficos e estatísticas  


## 🏗️ Arquitetura do Sistema
O sistema é dividido entre **frontend** e **backend**, comunicando-se via API RESTful.

### 🔹 Frontend (React)
- **Bibliotecas principais**: React, Axios, Bootstrap, CSS Modules
- **Gerenciamento de estado**: Context API
- **Interface modular** com componentes reutilizáveis

### 🔹 Backend (Java + Spring Boot)
- **Frameworks**: Spring Boot, Spring Security, Spring Data JPA
- **Banco de Dados**: MySQL
- **Padrão Arquitetural**: MVC (Model-View-Controller)


## 📌 Requisitos Gerais
### Requisitos Funcionais
- O sistema deve permitir o **registro de vendas** e exibição de relatórios.
- O usuário deve conseguir **cadastrar e monitorar estoque**.
- O sistema deve identificar **sobras de pães** e sugerir ajustes na produção.
- A aplicação deve registrar **notas a pagar e alertar vencimentos**.
- Funcionários devem poder **registrar presença digitalmente**.
- O sistema deve exibir um **painel de indicadores com estatísticas úteis**.

### Requisitos Não Funcionais
- O sistema deve ser **acessível via navegador**.
- A API deve ser **segura e protegida por autenticação**.
- O tempo de resposta das operações deve ser **inferior a 2 segundos**.
- O banco de dados deve ser **escalável e seguro**.





