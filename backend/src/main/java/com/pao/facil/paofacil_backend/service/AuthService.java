package com.pao.facil.paofacil_backend.service;

import com.pao.facil.paofacil_backend.entity.User;
import com.pao.facil.paofacil_backend.repository.UserRepository;
import com.pao.facil.paofacil_backend.dto.LoginRequest;
import com.pao.facil.paofacil_backend.dto.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // Método para autenticar usuário
    public LoginResponse authenticate(LoginRequest loginRequest) {
        User user = userRepository.findByUsername(loginRequest.getUsername()).orElse(null);

        if (user != null && passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
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
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return true;
    }

    // Método para invalidar o token (versão simplificada)
    public void invalidateToken(String token) {
        // Apenas registra que o token foi invalidado
        System.out.println("Token invalidado: " + token);
    }
}