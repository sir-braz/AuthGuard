
# Paofacil Backend

Este repositório contém o backend da aplicação **PaoFacil**, uma plataforma de gestão de pedidos de pães.

## Requisitos

Antes de rodar o projeto, você precisa ter as seguintes ferramentas instaladas:

- [Java 17](https://adoptopenjdk.net/)
- [Maven 3.6+](https://maven.apache.org/)
- [Docker](https://www.docker.com/)

## Construção e Execução Local

### 1. Clonar o Repositório

Clone o repositório do backend para sua máquina local:

```bash
git clone https://github.com/sir-braz/PaoFacil.git
cd backend
```

### 2. Construir o Projeto com Maven

Para compilar e empacotar o projeto em um JAR executável, use o Maven:

```bash
mvn clean package -DskipTests
```

Isso irá gerar o arquivo `paofacil-backend-0.0.1-SNAPSHOT.jar` dentro da pasta `target/`.

### 3. Executar Localmente

Para rodar a aplicação localmente, utilize o seguinte comando:

```bash
java -jar target/paofacil-backend-0.0.1-SNAPSHOT.jar
```

A aplicação será executada na porta **8080** por padrão.

## Construção com Docker

Caso queira rodar a aplicação dentro de um container Docker, siga os passos abaixo.

### 1. Construir a Imagem Docker

Execute o comando a seguir para construir a imagem Docker:

```bash
sudo docker build -t paofacil-backend .
```

### 2. Rodar o Container Docker

Depois de construir a imagem, execute o container com o seguinte comando:

```bash
sudo docker run -p 8080:8080 paofacil-backend
```

A aplicação estará disponível na URL `http://localhost:8080`.


## Contribuição

Se você quiser contribuir para o projeto, por favor, siga os seguintes passos:

1. Fork este repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Faça suas alterações e commit (`git commit -am 'Adicionando nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request para revisão.



