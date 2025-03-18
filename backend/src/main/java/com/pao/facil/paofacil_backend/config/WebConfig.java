package com.pao.facil.paofacil_backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")  // Permite CORS para todas as rotas
                .allowedOrigins("http://localhost:3000")  // Permite acesso do front-end
                .allowedMethods("GET", "POST", "PUT", "DELETE")  // Permite esses métodos HTTP
                .allowedHeaders("Content-Type")  // Permite cabeçalhos específicos
                .allowCredentials(true);  // Permite envio de credenciais (cookies, etc)
    }
}
