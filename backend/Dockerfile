# Use uma imagem do OpenJDK 17 como base
FROM openjdk:17-jdk-slim

# Instalar Maven
RUN apt-get update && apt-get install -y maven

# Defina o diretório de trabalho
WORKDIR /app

# Copie o arquivo pom.xml para o contêiner
COPY pom.xml .

# Baixe as dependências do Maven
RUN mvn dependency:go-offline

# Copie o código-fonte para o contêiner
COPY ./src ./src

# Compile o projeto e gere o pacote JAR, ignorando os testes
RUN mvn clean package -DskipTests

# Expõe a porta em que a aplicação será executada
EXPOSE 8080

# Comando para iniciar a aplicação
CMD ["java", "-jar", "target/paofacil-backend.jar"]
