**Sistema de Gestão para Padarias**  

## **1. Visão Geral**  
O ZeroSobra é um sistema de gestão para padarias, focado na redução do desperdício de alimentos e no controle da jornada de trabalho dos funcionários por meio de uma Folha de Ponto Digital.

## **2. Objetivo Principal**  
Reduzir o desperdício de alimentos nas padarias por meio de:  

✅ Controle de produção baseado em dados históricos de vendas.  
✅ Alertas de sobras em tempo real para ajustes na produção.  
✅ Relatórios de desperdício com causas e sugestões de correção.  


## **3. Estrutura do Projeto**  
```
/ZeroSobra
├── /frontend      # React + Dashboard Analytics
├── /backend       # Spring Boot + API de Gestão
├── /mobile        # Flutter (Versão Mobile) → Futura Implementação
└── /docs          # Documentação de Requisitos

```


## **4. Requisitos do Sistema**  
A seguir, os requisitos foram modelados de acordo com a Engenharia de Requisitos.

### **4.1 Requisitos Funcionais (RF)**  
| **ID**  | **Descrição** | **Prioridade** |
|--------|-------------|-------------|
| **RF01** | O sistema deve permitir o cadastro de produtos e insumos. | Alta |
| **RF02** | O sistema deve registrar as vendas realizadas diariamente. | Alta |
| **RF03** | O sistema deve gerar relatórios de desperdício de produtos. | Alta |
| **RF04** | O sistema deve emitir alertas em tempo real sobre sobras acima do limite definido. | Alta |
| **RF05** | O sistema deve prever a demanda com base no histórico de vendas. | Média |
| **RF06** | O sistema deve permitir o ajuste manual da previsão de produção. | Média |
| **RF08** | O sistema deve oferecer dashboards de análise para tomada de decisão. | Média |


### **4.2 Requisitos Não Funcionais (RNF)**  
| **ID**  | **Descrição** | **Prioridade** |
|--------|-------------|-------------|
| **RNF01** | O sistema deve ser acessível via web em dispositivos desktop e mobile. | Alta |
| **RNF02** | O backend deve utilizar a tecnologia **Spring Boot** para garantir escalabilidade. | Alta |
| **RNF03** | O frontend deve ser desenvolvido com **React** para melhor experiência do usuário. | Alta |
| **RNF04** | O sistema deve processar grandes volumes de dados sem comprometer a performance. | Média |
| **RNF06** | O sistema deve armazenar dados em um banco de dados relacional seguro. | Alta |


## **5. Casos de Uso Principais**  
### **5.1 Caso de Uso: Gerenciamento de Produção**  
**Ator Principal:** Gerente da Padaria  
**Descrição:** O gerente acessa o sistema para visualizar a previsão de demanda e ajustar a produção conforme necessário.  
**Fluxo Principal:**  
1. O gerente acessa o painel do ZeroSobra.  
2. O sistema exibe o histórico de vendas e a previsão para os próximos dias.  
3. O gerente ajusta manualmente os números, se necessário.  
4. O sistema salva as alterações e atualiza os alertas de produção.  


### **5.2 Caso de Uso: Controle de Estoque e Vendas**  
**Ator Principal:** Funcionário da Padaria  
**Descrição:** O funcionário registra as vendas e atualiza o estoque automaticamente.  
**Fluxo Principal:**  
1. O funcionário insere as vendas do dia no sistema.  
2. O sistema atualiza automaticamente o estoque.  
3. Caso haja risco de sobras, um alerta é gerado para ajuste na produção futura.  


## **6. Tecnologias Utilizadas**  
- **Frontend:** React.js  
- **Backend:** Spring Boot (Java)  
- **Banco de Dados:** PostgreSQL  
- **Machine Learning:** Python (Futura implementação)  


## **7. Conclusão**  
O ZeroSobra busca otimizar a gestão de padarias, reduzindo o desperdício e aumentando a eficiência operacional. A implementação de um sistema inteligente permitirá melhor controle da produção e integração eficiente entre vendas e estoque.  
