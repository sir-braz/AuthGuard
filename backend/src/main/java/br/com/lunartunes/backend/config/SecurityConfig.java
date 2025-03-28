package com.pao.facil.paofacil_backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(); // Usando o BCrypt para codificar senhas
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:3000")  // Permite CORS do frontend
                        .allowedMethods("GET", "POST", "PUT", "DELETE")  // Permite os métodos HTTP
                        .allowedHeaders("Authorization", "Content-Type");  // Permite cabeçalhos específicos
            }
        };
    }

    @Configuration
    public static class SecurityConfigurerAdapter extends WebSecurityConfigurerAdapter {
        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http.csrf().disable()  // Desabilita CSRF para facilitar os testes
                    .authorizeRequests()
                    .antMatchers("/api/auth/register", "/api/auth/login").permitAll()  // Permite o acesso ao registro sem autenticação
                    .anyRequest().authenticated()  // Exige autenticação para outros endpoints
                    .and()
                    .cors();  // Habilita CORS
        }
    }
}
