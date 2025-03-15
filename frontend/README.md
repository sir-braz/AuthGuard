# **Documentação Frontend - Pão Fácil**

## Descrição do Projeto

O **Pão Fácil** é uma aplicação frontend destinada a ajudar padarias a gerenciar suas operações de maneira eficiente. O sistema permite a administração de **vendas**, **estoque**, **pedidos pendentes**, **comprovantes de vendas**, **relatórios**, **usuários** e **registro de presença de funcionários**. O projeto é desenvolvido com o objetivo de ser uma solução escalável para padarias e possui uma interface responsiva construída com **React**.

## Estrutura do Projeto

O projeto utiliza **React** para construir uma interface dinâmica e responsiva. A estrutura do frontend é organizada da seguinte forma:

### Diretórios e Arquivos Importantes

- **src/**: Contém todos os arquivos de código-fonte da aplicação.
  - **components/**: Contém os componentes reutilizáveis (como botões, tabelas, formulários, etc).
  - **pages/**: Contém as páginas principais da aplicação (Dashboard, Vendas, Estoque, etc).
  - **services/**: Contém funções responsáveis por interagir com APIs ou gerenciar dados temporários.
  - **assets/**: Contém recursos estáticos como imagens, ícones e folhas de estilo.

### Principais Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface de usuário.
- **React-Router**: Usado para navegação entre as páginas da aplicação.
- **React-Bootstrap**: Conjunto de componentes de interface de usuário baseado no framework Bootstrap, para um design responsivo e amigável.
- **jsPDF**: Biblioteca utilizada para a geração de comprovantes de vendas em PDF.

### Funcionalidades Implementadas

1. **Dashboard**
   - Apresentação de informações gerais sobre vendas, estoque e métricas de performance.
   
2. **Registro de Vendas**
   - Interface para registrar vendas, selecionar produtos e gerar **comprovantes de venda** em PDF.

3. **Gestão de Estoque**
   - Funcionalidades para listar, adicionar, editar e excluir produtos no estoque.

4. **Pedidos Pendentes**
   - Monitoramento e acompanhamento dos pedidos que aguardam processamento.

5. **Relatórios**
   - Exibição de relatórios sobre as vendas e o estoque da padaria.

6. **Configurações e Gestão de Usuários**
   - Interface para administrar usuários e permissões administrativas.

7. **Múltiplas Padarias**
   - Permite a criação e o gerenciamento de múltiplas padarias, com dados independentes para cada uma.

8. **Registro de Presença**
   - Funcionalidade para registrar as entradas e saídas dos funcionários, monitorando a frequência de trabalho.

## Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/sir-braz/pao-facil.git
```

### 2. Instale as dependências

No diretório raiz do projeto, execute o comando abaixo para instalar as dependências:

```bash
npm install
```

### 3. Execute o projeto

Após a instalação das dependências, inicie o servidor de desenvolvimento:

```bash
npm start
```

A aplicação estará disponível em **http://localhost:3000**.

## Como Contribuir

Contribuições são bem-vindas! Para contribuir, siga os passos abaixo:

1. Fork o repositório.
2. Crie uma branch para sua funcionalidade (`git checkout -b feature/nova-funcionalidade`).
3. Faça as alterações necessárias e commit as mudanças (`git commit -am 'Adiciona nova funcionalidade'`).
4. Envie para o repositório original (`git push origin feature/nova-funcionalidade`).
5. Crie uma Pull Request explicando suas modificações.

