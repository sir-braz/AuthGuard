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
