package com.pao.facil.paofacil_backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class CorsTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void testCorsHeaders() {
        // Enviar uma requisição POST para o endpoint do backend
        ResponseEntity<String> response = restTemplate.exchange(
                "/api/auth/register", // Endpoint de teste
                HttpMethod.POST,
                null, // Se necessário, adicione um RequestEntity aqui
                String.class
        );

        // Obter os cabeçalhos da resposta
        HttpHeaders headers = response.getHeaders();

        // Verificar se o cabeçalho "Access-Control-Allow-Origin" está presente
        String allowOriginHeader = headers.getFirst(HttpHeaders.ACCESS_CONTROL_ALLOW_ORIGIN);
        assertTrue(allowOriginHeader != null && allowOriginHeader.equals("http://localhost:3000"),
                "Cabeçalho Access-Control-Allow-Origin está incorreto ou ausente");

        // Verificar o cabeçalho "Access-Control-Allow-Methods"
        String allowMethodsHeader = headers.getFirst(HttpHeaders.ACCESS_CONTROL_ALLOW_METHODS);
        assertTrue(allowMethodsHeader != null && allowMethodsHeader.contains("POST"),
                "Cabeçalho Access-Control-Allow-Methods está incorreto ou ausente");

        // Verificar o cabeçalho "Access-Control-Allow-Headers"
        String allowHeadersHeader = headers.getFirst(HttpHeaders.ACCESS_CONTROL_ALLOW_HEADERS);
        assertTrue(allowHeadersHeader != null && allowHeadersHeader.contains("Content-Type"),
                "Cabeçalho Access-Control-Allow-Headers está incorreto ou ausente");

        // Adicionar uma verificação adicional para garantir que a resposta foi bem-sucedida
        assertTrue(response.getStatusCode().is2xxSuccessful(), "Resposta não foi bem-sucedida");
    }
}
