# 💰 ZeroSobra – Gestão Financeira para Padarias  

O **ZeroSobra** é um sistema de **gestão financeira** desenvolvido para padarias, permitindo um **controle eficiente do fluxo de caixa**, **registro de entradas e saídas**, e **análise detalhada de receitas e despesas**.  

## 🚀 Funcionalidades  

✅ **Registro Automático de Entradas e Saídas** – Simplifique o controle financeiro.  
✅ **Dashboard Financeiro** – Visualize gráficos e relatórios de lucros e despesas.  
✅ **Gestão de Contas a Pagar e Receber** – Controle de boletos, pagamentos e recebimentos.  
✅ **Alertas Financeiros Inteligentes** – Notificações sobre saldo baixo e contas vencendo.  
✅ **Segurança e Acessibilidade** – Proteção avançada para dados financeiros e acesso via web e mobile.  

## 📁 Estrutura do Projeto  

```
/ZeroSobra
├── /frontend      # React (Dashboard Financeiro)
├── /backend       # Spring Boot (API de Gestão Financeira)
├── /mobile        # Flutter (Versão Mobile – Em Desenvolvimento)
└── /docs          # Documentação e Requisitos
```

## 🔧 Tecnologias Utilizadas  

- **Frontend:** React.js (TypeScript, Styled Components)  
- **Backend:** Spring Boot (Java, Spring Security, JWT)  
- **Banco de Dados:** PostgreSQL  
- **Mobile:** Flutter (Dart) *(futura implementação)*  
- **Infraestrutura:** Docker, Kubernetes *(futura implementação)*  

## ⚙️ Instalação e Configuração  

### 🖥️ Backend  
```bash
cd backend
./mvnw spring-boot:run
```

### 🌐 Frontend  
```bash
cd frontend
npm install
npm start
```

### 📱 Mobile *(Futura Implementação)*  
```bash
cd mobile
flutter run
```

## 📊 Requisitos  

### 🔹 Requisitos Funcionais (RF)  

| ID   | Descrição                                              | Prioridade |
|------|------------------------------------------------------|------------|
| RF01 | Registrar entradas e saídas financeiras             | 🔴 Alta     |
| RF02 | Gerar relatórios financeiros detalhados             | 🔴 Alta     |
| RF03 | Gerenciar contas a pagar e a receber                | 🔴 Alta     |
| RF04 | Emitir alertas sobre saldo crítico e contas vencendo | 🔴 Alta     |
| RF05 | Permitir múltiplos usuários com níveis de acesso    | 🟡 Média     |
| RF06 | Oferecer dashboards com indicadores financeiros     | 🟡 Média     |

### 🔹 Requisitos Não Funcionais (RNF)  

| ID   | Descrição                                          | Prioridade |
|------|--------------------------------------------------|------------|
| RNF01 | O sistema deve ser acessível via web e mobile  | 🔴 Alta     |
| RNF02 | O backend deve utilizar Spring Boot para escalabilidade | 🔴 Alta     |
| RNF03 | O sistema deve garantir segurança dos dados financeiros | 🔴 Alta     |
| RNF04 | O tempo de resposta das operações deve ser inferior a 2s | 🟡 Média     |

## 📌 Casos de Uso  

### 1️⃣ Controle de Fluxo de Caixa  

**👤 Ator:** Dono da Padaria  
📌 **Fluxo:**  
1. O sistema recebe automaticamente os dados de vendas e pagamentos.  
2. O usuário visualiza o saldo diário e os relatórios financeiros.  
3. O sistema alerta sobre riscos financeiros ou saldo abaixo do necessário.  

### 2️⃣ Gestão de Contas a Pagar e Receber  

**👤 Ator:** Gerente Financeiro  
📌 **Fluxo:**  
1. O gerente cadastra despesas fixas e variáveis.  
2. O sistema compara com o fluxo de caixa e projeta a necessidade de capital.  
3. Caso o saldo projetado fique negativo, um alerta é gerado.  




