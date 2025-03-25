# **GestãoTrabalho – Sistema de Gestão de Funcionários**

## **Sumário**  
1. [Visão Geral](#1-visão-geral)  
2. [Objetivos](#2-objetivos)  
3. [Estrutura do Projeto](#3-estrutura-do-projeto)  
4. [Requisitos do Sistema](#4-requisitos-do-sistema)  
   - 4.1 [Requisitos Funcionais](#41-requisitos-funcionais)  
   - 4.2 [Requisitos Não Funcionais](#42-requisitos-não-funcionais)  
5. [Casos de Uso](#5-casos-de-uso)  
6. [Tecnologias Utilizadas](#6-tecnologias-utilizadas)  
7. [Conclusão](#7-conclusão)


## **1. Visão Geral**  
O **GestãoTrabalho** é um sistema de gestão de funcionários com foco principal na **gestão da jornada de trabalho**, proporcionando uma **Folha de Ponto Digital** para o registro das horas de entrada, saída e intervalos. O sistema foi desenvolvido para atender empresas, e facilita a **gestão da folha de pagamento**, **controle de horas trabalhadas**, **atrasos** e **relatórios detalhados de produtividade**.

## **2. Objetivos**  
✅ **Controlar a jornada de trabalho** dos funcionários.  
✅ **Gerar relatórios** detalhados sobre horas trabalhadas, atrasos, faltas e horas extras.  
✅ **Oferecer um painel de fácil acesso** para o registro de ponto digital.  
✅ **Facilitar a gestão da folha de pagamento** e reduzir erros relacionados ao cálculo de horas.  
✅ **Garantir flexibilidade** para ser utilizado em diferentes tipos de empresas.

## **3. Estrutura do Projeto**  
```
/GestãoTrabalho
├── /frontend      # React + Dashboard Analytics
├── /backend       # Spring Boot + API de Gestão
└── /docs          # Documentação de Requisitos
```

## **4. Requisitos do Sistema**  

### **4.1 Requisitos Funcionais**  
| **ID**  | **Descrição** | **Prioridade** |
|---------|---------------|----------------|
| **RF01** | Permitir o cadastro de funcionários no sistema. | Alta |
| **RF02** | Registrar as entradas, saídas e intervalos dos funcionários de forma digital. | Alta |
| **RF03** | Permitir que os funcionários batam ponto via web ou dispositivo mobile. | Alta |
| **RF04** | Gerar relatórios de horas trabalhadas por funcionário, incluindo horas extras e faltas. | Alta |
| **RF05** | Registrar e controlar os atrasos dos funcionários. | Alta |
| **RF06** | Permitir que o gerente visualize os horários de entrada, saída e intervalos dos funcionários em tempo real. | Alta |
| **RF07** | Emitir alertas para o gerente sobre inconsistências na jornada de trabalho (ex: atrasos, horas extras). | Média |
| **RF08** | Permitir ajustes manuais nas jornadas registradas, caso necessário (ex: correção de erro de ponto). | Média |
| **RF09** | Permitir exportação dos dados de horas trabalhadas para integração com sistemas de folha de pagamento. | Alta |
| **RF10** | Implementar funcionalidades para aprovação e validação dos registros de ponto pelo gerente. | Alta |
| **RF11** | Gerar relatórios analíticos sobre a frequência, faltas e produtividade dos funcionários. | Média |


### **4.2 Requisitos Não Funcionais**  
| **ID**  | **Descrição** | **Prioridade** |
|---------|---------------|----------------|
| **RNF01** | O sistema deve ser acessível via web em dispositivos desktop e mobile, garantindo a flexibilidade de uso em diferentes plataformas. | Alta |
| **RNF02** | O backend deve utilizar **Spring Boot** para garantir escalabilidade, performance e manutenibilidade. | Alta |
| **RNF03** | O frontend deve ser desenvolvido com **React** para garantir uma experiência de usuário intuitiva e eficiente. | Alta |
| **RNF04** | O sistema deve ser capaz de processar grandes volumes de dados (como registros de jornada de trabalho de muitos funcionários) sem comprometer a performance. | Média |
| **RNF05** | O sistema deve ser desenvolvido com foco na **segurança** dos dados dos funcionários, incluindo criptografia e políticas rigorosas de acesso. | Alta |
| **RNF06** | O sistema deve armazenar dados em um banco de dados relacional seguro, como o **PostgreSQL**, para garantir a integridade e segurança dos dados. | Alta |
| **RNF07** | O sistema deve ter alta disponibilidade, sendo capaz de operar de forma contínua sem interrupções significativas. | Média |
| **RNF08** | O sistema deve ser projetado para ser facilmente escalável, para suportar o crescimento da base de dados e a inclusão de novos recursos no futuro. | Média |
| **RNF09** | O sistema deve ter tempos de resposta rápidos para a interação com os usuários (funcionários e gestores), proporcionando uma experiência ágil. | Alta |
| **RNF10** | O sistema deve ser compatível com os principais navegadores (Chrome, Firefox, Safari, Edge) e garantir um design responsivo. | Alta |


## **5. Casos de Uso**

### **5.1 Caso de Uso: Registro de Ponto Digital**  
**Ator Principal:** Funcionário  
**Descrição:** O funcionário registra sua jornada de trabalho de forma digital através do sistema.  
**Fluxo Principal:**  
1. O funcionário acessa o sistema (via desktop ou mobile) e seleciona a opção de **bater ponto**.  
2. O sistema registra o horário de entrada, saída ou intervalo conforme a ação escolhida.  
3. O sistema armazena os dados de forma segura no banco de dados.  
4. O gerente pode acessar esses registros para validação e geração de relatórios.  
5. O sistema emite alertas sobre qualquer inconsistência, como falta de batida de ponto ou horário de saída fora do esperado.

### **5.2 Caso de Uso: Gerenciamento de Jornada**  
**Ator Principal:** Gerente  
**Descrição:** O gerente verifica e ajusta os registros de ponto, gerencia os horários de trabalho dos funcionários e aprova as horas trabalhadas.  
**Fluxo Principal:**  
1. O gerente acessa o painel de controle do **GestãoTrabalho**.  
2. O sistema exibe uma visão geral da jornada de todos os funcionários (entradas, saídas, intervalos).  
3. O gerente verifica os registros de ponto, corrige eventuais erros (se necessário) e aprova as horas.  
4. O sistema gera relatórios de horas trabalhadas, faltas, atrasos e horas extras para controle de folha de pagamento.  
5. O sistema emite alertas sobre inconsistências, como atrasos ou batidas de ponto não registradas.

### **5.3 Caso de Uso: Relatórios de Jornada de Trabalho**  
**Ator Principal:** Gerente  
**Descrição:** O gerente pode gerar relatórios detalhados sobre as horas trabalhadas, atrasos, horas extras e faltas dos funcionários.  
**Fluxo Principal:**  
1. O gerente acessa a seção de relatórios no painel de controle.  
2. O sistema exibe diferentes opções de relatórios: horas trabalhadas, horas extras, atrasos e faltas.  
3. O gerente seleciona o tipo de relatório desejado e o período de análise.  
4. O sistema gera e exibe o relatório para visualização ou exportação.

### **5.4 Caso de Uso: Aprovação de Ponto**  
**Ator Principal:** Gerente  
**Descrição:** O gerente revisa e aprova os registros de ponto dos funcionários, garantindo que as informações sejam precisas antes de serem usadas para folha de pagamento.  
**Fluxo Principal:**  
1. O gerente acessa o painel de controle do sistema.  
2. O sistema exibe uma lista de registros de ponto pendentes para aprovação.  
3. O gerente verifica os registros de ponto de cada funcionário, incluindo horas de entrada, saída e intervalos.  
4. Caso necessário, o gerente faz ajustes manuais nos registros de ponto.  
5. O gerente aprova os registros para processamento da folha de pagamento.  
6. O sistema atualiza o status dos registros para "aprovado" e gera um relatório para folha de pagamento.  

