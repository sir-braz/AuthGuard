FROM openjdk:17-jdk-slim AS build

# Instalar Maven
RUN apt-get update && apt-get install -y maven

# Definir o diretório de trabalho no container
WORKDIR /app

# Copiar os arquivos do projeto para o diretório de trabalho
COPY . .

# Rodar o Maven para compilar o projeto (sem rodar os testes)
RUN mvn clean package -DskipTests

# Usar o OpenJDK 17 na imagem final
FROM openjdk:17-jdk-slim

WORKDIR /app

# Copiar o arquivo JAR do estágio anterior
COPY --from=build /app/target/paofacil-backend-0.0.1-SNAPSHOT.jar /app/app.jar

# Expor a porta
EXPOSE 8080

# Rodar o JAR
CMD ["java", "-jar", "app.jar"]
