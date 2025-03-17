# Etapa de build: usa a imagem do Maven para compilar o projeto
FROM maven:3.9.6-eclipse-temurin-17 AS builder
WORKDIR /app

# Copia o pom.xml primeiro para aproveitar o cache de dependências do Maven
COPY pom.xml .
RUN mvn dependency:go-offline

# Copia o restante do código e faz o build da aplicação
COPY . .
RUN mvn clean package -DskipTests

# Etapa de execução: usa a imagem mais leve do Java para rodar a aplicação
FROM eclipse-temurin:17-jre
WORKDIR /app

# Copia o JAR compilado da etapa anterior
COPY --from=builder /app/target/paofacil-backend-0.0.1-SNAPSHOT.jar app.jar

# Expõe a porta 8080 para acessar a aplicação
EXPOSE 8080

# Comando para rodar o JAR
CMD ["java", "-jar", "app.jar"]
