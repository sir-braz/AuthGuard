package com.pao.facil.paofacil_backend.service;

import com.pao.facil.paofacil_backend.entity.User;
import com.pao.facil.paofacil_backend.repository.UserRepository;
import com.pao.facil.paofacil_backend.dto.LoginRequest;
import com.pao.facil.paofacil_backend.dto.LoginResponse;
import org.mindrot.jbcrypt.BCrypt; // Importando a biblioteca BCrypt
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    // Método para autenticar usuário
    public LoginResponse authenticate(LoginRequest loginRequest) {
        User user = userRepository.findByUsername(loginRequest.getUsername()).orElse(null);

        if (user != null && BCrypt.checkpw(loginRequest.getPassword(), user.getPassword())) {
            String token = "generated-jwt-token"; // Placeholder para o JWT
            return new LoginResponse(token);
        } else {
            throw new RuntimeException("Credenciais inválidas");
        }
    }

    // Método para registrar um novo usuário
    public boolean registerUser(User user) {
        if (userRepository.existsByUsername(user.getUsername())) {
            return false; // Retorna false caso o nome de usuário já esteja em uso
        }
        String hashedPassword = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
        user.setPassword(hashedPassword);  // Armazenar a senha já com hash
        userRepository.save(user);
        return true;
    }

    // Método para invalidar o token (versão simplificada)
    public void invalidateToken(String token) {
        // Apenas registra que o token foi invalidado
        System.out.println("Token invalidado: " + token);
    }
}
