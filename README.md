# **ZeroSobra – Sistema de Gestão para Padarias**

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

---

## **1. Visão Geral**  
O **ZeroSobra** é um sistema de gestão para padarias, focado na **redução do desperdício de alimentos** e no **controle da jornada de trabalho dos funcionários** por meio de uma **Folha de Ponto Digital**.


## **2. Objetivos**  
✅ **Reduzir desperdícios** de insumos e produtos acabados.  
✅ **Emitir alertas** sobre sobras de produtos e insumos.  
✅ **Gerar relatórios** detalhados sobre desperdícios e consumo de insumos.  
✅ **Controlar a jornada de trabalho** dos funcionários com a Folha de Ponto Digital.



## **3. Estrutura do Projeto**  
```
/ZeroSobra
├── /frontend      # React + Dashboard Analytics
├── /backend       # Spring Boot + API de Gestão
├── /mobile        # Flutter (Versão Mobile) → Futura Implementação
├── /ai-module     # Modelo Preditivo (Python/ML) → Futura Implementação
└── /docs          # Documentação de Requisitos
```



## **4. Requisitos do Sistema**

### **4.1 Requisitos Funcionais**  
| **ID**  | **Descrição** | **Prioridade** |
|---------|---------------|----------------|
| **RF01** | Permitir o cadastro de produtos e insumos. | Alta |
| **RF02** | Registrar as vendas realizadas diariamente. | Alta |
| **RF03** | Gerar relatórios de desperdício de insumos e produtos. | Alta |
| **RF04** | Emitir alertas em tempo real sobre sobras acima do limite. | Alta |
| **RF05** | Analisar dados históricos para reduzir desperdícios. | Média |
| **RF06** | Permitir ajustes manuais nas previsões de consumo. | Média |
| **RF07** | Oferecer dashboards de análise para tomada de decisão. | Média |
| **RF08** | **Implementar uma Folha de Ponto Digital para controle da jornada.** | Alta |
| **RF09** | Permitir que funcionários batam ponto digitalmente via web ou mobile. | Alta |
| **RF10** | Registrar horários de entrada, saída e intervalos. | Alta |
| **RF11** | Gerar relatórios de horas trabalhadas e atrasos. | Média |



### **4.2 Requisitos Não Funcionais**  
| **ID**  | **Descrição** | **Prioridade** |
|---------|---------------|----------------|
| **RNF01** | O sistema deve ser acessível via web em dispositivos desktop e mobile. | Alta |
| **RNF02** | O backend deve utilizar **Spring Boot** para garantir escalabilidade. | Alta |
| **RNF03** | O frontend deve ser desenvolvido com **React** para melhor experiência do usuário. | Alta |
| **RNF04** | O sistema deve processar grandes volumes de dados sem comprometer a performance. | Média |
| **RNF05** | O módulo de IA deve ser baseado em **Python** e utilizar técnicas de **Machine Learning**. | Média |
| **RNF06** | O sistema deve armazenar dados em um banco de dados relacional seguro. | Alta |



## **5. Casos de Uso**

### **5.1 Caso de Uso: Controle de Desperdício**  
**Ator Principal:** Gerente da Padaria  
**Descrição:** O gerente acessa o sistema para visualizar dados de desperdício e tomar decisões para reduzir perdas.  
**Fluxo Principal:**  
1. O gerente acessa o painel do ZeroSobra.  
2. O sistema exibe relatórios e alertas sobre sobras de produtos e insumos.  
3. O gerente pode ajustar previsões e tomar medidas para minimizar desperdícios.  
4. O sistema salva as alterações e atualiza os alertas.

### **5.2 Caso de Uso: Registro de Ponto Digital**  
**Ator Principal:** Funcionário da Padaria  
**Descrição:** O funcionário bate ponto digitalmente via sistema.  
**Fluxo Principal:**  
1. O funcionário acessa o sistema e seleciona a opção de **bater ponto**.  
2. O sistema registra o horário de entrada, saída ou intervalo.  
3. O gerente pode visualizar relatórios da jornada dos funcionários.



## **6. Tecnologias Utilizadas**  
- **Frontend:** React.js  
- **Backend:** Spring Boot (Java)  
- **Banco de Dados:** PostgreSQL



## **7. Conclusão**  
O **ZeroSobra** é um sistema completo para a gestão da **redução do desperdício de alimentos** e do **controle da jornada de trabalho** dos funcionários via **Folha de Ponto Digital**. O foco na minimização de sobras e na eficiência operacional visa proporcionar uma gestão mais sustentável e organizada para padarias.
