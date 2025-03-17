package com.pao.facil.paofacil_backend.service;

import com.pao.facil.paofacil_backend.dto.LoginRequest;
import com.pao.facil.paofacil_backend.dto.LoginResponse;
import com.pao.facil.paofacil_backend.dto.RegisterRequest;
import com.pao.facil.paofacil_backend.entity.User;
import com.pao.facil.paofacil_backend.repository.UserRepository;
import com.pao.facil.paofacil_backend.util.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    // Armazena tokens revogados (simulação simples)
    private Set<String> revokedTokens = new HashSet<>();

    // Registra o usuário
    public boolean registerUser(RegisterRequest registerRequest) {
        if (userRepository.findByUsername(registerRequest.getUsername()).isPresent()) {
            throw new RuntimeException("Nome de usuário já em uso.");
        }

        User user = new User();
        user.setUsername(registerRequest.getUsername());
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        userRepository.save(user);
        return true;
    }

    // Autentica o usuário e gera um token
    public LoginResponse authenticate(LoginRequest loginRequest) {
        User user = userRepository.findByUsername(loginRequest.getUsername())
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        if (!passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
            throw new RuntimeException("Senha inválida");
        }

        String token = jwtTokenProvider.generateToken(user.getUsername());
        return new LoginResponse(token);
    }

    // Método de logout (simulação de revogação de token)
    public boolean logout(String token) {
        // Simula a revogação do token
        return revokedTokens.add(token);  // Adiciona o token à lista de revogados
    }

    // Método que valida o token
    public boolean validateToken(String token) {
        return jwtTokenProvider.validateToken(token);
    }
}
