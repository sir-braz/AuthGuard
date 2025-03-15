# BakerPro

## Descrição do Projeto

O **BakerPro** é uma aplicação destinada a ajudar padarias a gerenciar suas operações de maneira eficiente. O sistema permite a administração de **vendas**, **estoque**, **pedidos pendentes**, **comprovantes de vendas**, **relatórios**, **usuários** e **registro de presença de funcionários**. Além disso, oferece suporte para que diversas padarias possam ser cadastradas, tornando-se uma solução escalável para uma **startup** voltada à gestão de panificadoras.

Atualmente, o projeto **não utiliza banco de dados**, e os dados são armazenados temporariamente no frontend. Futuramente, será integrada uma solução de banco de dados para persistência das informações.

## Funcionalidades Principais

- **Dashboard**: Painel de controle com informações gerais sobre vendas, estoque e métricas da padaria.
- **Vendas**: Registro e acompanhamento das vendas realizadas.
- **Estoque**: Gerenciamento de produtos disponíveis, incluindo quantidade e preços.
- **Pedidos Pendentes**: Monitoramento de pedidos que aguardam processamento.
- **Comprovantes de Vendas**: Geração de comprovantes em PDF após a finalização da venda.
- **Relatórios**: Exibição de métricas e estatísticas sobre vendas e estoque.
- **Configurações**: Gerenciamento de usuários e permissões administrativas.
- **Múltiplas Padarias**: Permite que diferentes padarias se cadastrem e gerenciem seus próprios dados de forma independente.
- **Registro de Presença**: Controle da entrada e saída dos funcionários, registrando horários e frequência de trabalho.

## Tecnologias Utilizadas

- **React**: Interface dinâmica e responsiva.
- **React-Bootstrap**: Componentes visuais para um design amigável.
- **jsPDF**: Geração de comprovantes de vendas em PDF.
- **React-Router**: Navegação entre páginas.

## Dependências

Antes de rodar o projeto, instale as dependências com:

```bash
npm install
```

## Como Executar

### 1. Clone o repositório

```bash
git clone https://github.com/sir-braz/bakerpro.git
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute o projeto

```bash
npm start
```

A aplicação estará disponível em **http://localhost:3000**.

## Como Funciona

1. **Registro de Vendas**:
   - Seleção de produtos e registro da venda.
   - Geração de **comprovante de venda** em PDF.

2. **Gestão de Estoque**:
   - Listagem e atualização de produtos e quantidades.
   
3. **Pedidos Pendentes**:
   - Acompanhamento de pedidos para garantir o processamento correto.

4. **Múltiplas Padarias**:
   - Cada padaria cadastrada pode gerenciar suas próprias operações de forma independente.

5. **Registro de Presença**:
   - Controle de entrada e saída dos funcionários.
   - Registro automático de horários e frequência de trabalho.

## Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork o repositório.
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`).
3. Faça as alterações e commit (`git commit -am 'Adiciona nova funcionalidade'`).
4. Envie para o repositório original (`git push origin feature/nova-funcionalidade`).
5. Crie uma Pull Request explicando suas modificações.


