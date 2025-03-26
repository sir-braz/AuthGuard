# 💰 ZeroSobra – Gestão Financeira para Padarias  

O **ZeroSobra** é um sistema de **gestão financeira** para padarias, ajudando no **controle do fluxo de caixa**, **registro de entradas e saídas** e **análise de receitas e despesas**.  

## 🚀 Funcionalidades  

✅ **Registro automático de entradas e saídas** – Controle financeiro simplificado.  
✅ **Dashboard Financeiro** – Gráficos e relatórios para análise de lucros e despesas.  
✅ **Gestão de Contas a Pagar e Receber** – Controle de boletos, pagamentos e recebimentos.  
✅ **Alertas Financeiros** – Notificações sobre saldo baixo e contas vencendo.  


## 📁 Estrutura do Projeto  

/ZeroSobra
├── /frontend      # React (Dashboard Financeiro)
├── /backend       # Spring Boot (API de Gestão Financeira)
├── /mobile        # Flutter (Versão Mobile – Futura Implementação)
└── /docs          # Documentação de Requisitos


## 🔧 Tecnologias Utilizadas  

- **Frontend:** React.js  
- **Backend:** Spring Boot (Java)  
- **Banco de Dados:** PostgreSQL    

## ⚙️ Instalação e Configuração  

### 🖥️ Backend  
```bash
cd backend
./mvnw spring-boot:run

🌐 Frontend

cd frontend
npm install
npm start

📱 Mobile (Futura Implementação)

cd mobile
flutter run

📊 Requisitos

🔹 Requisitos Funcionais (RF)

ID	Descrição	Prioridade
RF01	Registrar entradas e saídas financeiras	🔴 Alta
RF02	Gerar relatórios financeiros detalhados	🔴 Alta
RF03	Gerenciar contas a pagar e a receber	🔴 Alta
RF04	Emitir alertas sobre saldo crítico e contas vencendo	🔴 Alta
RF06	Oferecer dashboards com indicadores financeiros	🟡 Média

🔹 Requisitos Não Funcionais (RNF)

ID	Descrição	Prioridade
RNF01	O sistema deve ser acessível via web e mobile	🔴 Alta
RNF02	O backend deve utilizar Spring Boot para escalabilidade	🔴 Alta
RNF03	O sistema deve garantir segurança dos dados financeiros	🔴 Alta

📌 Casos de Uso

1️⃣ Controle de Fluxo de Caixa

👤 Ator: Dono da Padaria
📌 Fluxo:
	1.	O sistema recebe automaticamente os dados de vendas e pagamentos.
	2.	O usuário visualiza o saldo diário e os relatórios financeiros.
	3.	O sistema alerta sobre riscos financeiros ou saldo abaixo do necessário.

2️⃣ Gestão de Contas a Pagar e Receber

👤 Ator: Gerente Financeiro
📌 Fluxo:
	1.	O gerente cadastra despesas fixas e variáveis.
	2.	O sistema compara com o fluxo de caixa e projeta a necessidade de capital.
	3.	Caso o saldo projetado fique negativo, um alerta é gerado.

🤝 Contribuindo
	1.	Faça um fork do projeto
	2.	Crie uma branch (git checkout -b minha-feature)
	3.	Faça o commit das suas alterações (git commit -m 'Minha nova feature')
	4.	Envie para o repositório (git push origin minha-feature)
	5.	Abra um Pull Request






