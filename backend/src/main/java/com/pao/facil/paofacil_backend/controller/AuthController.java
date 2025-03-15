package com.example.paoFacil.controller;

import com.example.paoFacil.model.User;
import com.example.paoFacil.repository.UserRepository;
import com.example.paoFacil.dto.LoginRequest;
import com.example.paoFacil.dto.LoginResponse;
import com.example.paoFacil.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
        LoginResponse loginResponse = authService.authenticate(loginRequest);
        return ResponseEntity.ok(loginResponse);
    }

    // Endpoint de registro de usuário (caso você queira permitir o cadastro de usuários)
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        boolean userCreated = authService.registerUser(user);
        if (userCreated) {
            return ResponseEntity.ok("Usuário registrado com sucesso.");
        } else {
            return ResponseEntity.status(400).body("Erro ao registrar usuário.");
        }
    }
}
