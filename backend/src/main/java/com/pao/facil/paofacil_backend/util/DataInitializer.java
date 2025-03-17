package com.pao.facil.paofacil_backend.util;

import com.pao.facil.paofacil_backend.entity.User;
import com.pao.facil.paofacil_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        // Verifica se já existem usuários no banco de dados
        if (userRepository.count() == 0) {
            // Cria alguns usuários de exemplo
            User user1 = new User();
            user1.setUsername("usuario1");
            user1.setPassword(passwordEncoder.encode("senha123")); // Codifica a senha
            userRepository.save(user1);

            User user2 = new User();
            user2.setUsername("usuario2");
            user2.setPassword(passwordEncoder.encode("senha456")); // Codifica a senha
            userRepository.save(user2);

            System.out.println("Usuários de exemplo criados com sucesso!");
        }
    }
}