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

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;

import java.util.Date;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

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

    public LoginResponse authenticate(LoginRequest loginRequest) {
        User user = userRepository.findByUsername(loginRequest.getUsername())
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        if (!passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
            throw new RuntimeException("Senha inválida");
        }

        String token = jwtTokenProvider.generateToken(user.getUsername());
        return new LoginResponse(token);
    }

    public String getUsernameFromToken(String token) {
        return jwtTokenProvider.getUsernameFromToken(token);
    }

    public boolean validateToken(String token) {
        return jwtTokenProvider.validateToken(token);
    }
}
