package com.pao.facil.paofacil_backend.service;

import com.pao.facil.paofacil_backend.entity.User;
import com.pao.facil.paofacil_backend.repository.UserRepository;
import com.pao.facil.paofacil_backend.dto.LoginRequest;
import com.pao.facil.paofacil_backend.dto.LoginResponse;
import com.pao.facil.paofacil_backend.dto.RegisterRequest;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.Date;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class AuthService {

    private static final String SECRET_KEY = "aslkjdlaksjlkjdsa";  // Defina uma chave secreta para assinatura do JWT

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    // Método para autenticar usuário
    public LoginResponse authenticate(LoginRequest loginRequest) {
        User user = userRepository.findByUsername(loginRequest.getUsername()).orElse(null);

        if (user != null && passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
            String token = generateJwtToken(user);  // Gera o token JWT real
            return new LoginResponse(token);
        } else {
            throw new RuntimeException("Credenciais inválidas");
        }
    }

    // Método para gerar um JWT
    private String generateJwtToken(User user) {
        return Jwts.builder()
                .setSubject(user.getUsername())  // Armazena o nome de usuário como o "subject" do token
                .setIssuedAt(new Date())  // Data de emissão do token
                .setExpiration(new Date(System.currentTimeMillis() + 86400000))  // Define a expiração para 1 dia
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)  // Assina o token com a chave secreta
                .compact();
    }

    // Método para registrar um novo usuário
    public boolean registerUser(RegisterRequest registerRequest) {
        if (userRepository.existsByUsername(registerRequest.getUsername())) {
            throw new RuntimeException("Nome de usuário já em uso.");
        }

        // Mapeando o DTO RegisterRequest para a entidade User
        User newUser = new User();
        newUser.setUsername(registerRequest.getUsername());
        newUser.setPassword(passwordEncoder.encode(registerRequest.getPassword()));  // Codificando a senha

        userRepository.save(newUser); // Salvando no banco de dados
        return true;
    }

    // Método para invalidar o token (no backend, você pode apenas ignorar ou registrar a invalidação)
    public void invalidateToken(String token) {
        // Em uma implementação real, você pode armazenar o token para invalidá-lo
        // Aqui, estamos apenas simulando o processo com uma mensagem no console
        System.out.println("Token invalidado: " + token);  // Apenas uma simulação no backend
    }
}
