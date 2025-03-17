package com.pao.facil.paofacil_backend.controller;

import com.pao.facil.paofacil_backend.dto.LoginRequest;
import com.pao.facil.paofacil_backend.dto.LoginResponse;
import com.pao.facil.paofacil_backend.dto.RegisterRequest;
import com.pao.facil.paofacil_backend.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest registerRequest) {
        try {
            boolean registered = authService.registerUser(registerRequest);
            if (registered) {
                return ResponseEntity.ok("Usuário registrado com sucesso");
            } else {
                return ResponseEntity.badRequest().body("Erro ao registrar o usuário");
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Erro: " + e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        try {
            LoginResponse response = authService.authenticate(loginRequest);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Erro: " + e.getMessage());
        }
    }

    @GetMapping("/me")
    public ResponseEntity<String> getUserInfo(Authentication authentication) {
        if (authentication != null) {
            // Retorna informações do usuário autenticado
            return ResponseEntity.ok("Usuário autenticado: " + authentication.getName());
        }
        // Se não estiver autenticado, retorna erro
        return ResponseEntity.badRequest().body("Usuário não autenticado");
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(@RequestHeader("Authorization") String token) {
        try {
            boolean logoutSuccess = authService.logout(token);

            if (logoutSuccess) {
                return ResponseEntity.ok("Logout realizado com sucesso");
            } else {
                return ResponseEntity.badRequest().body("Erro ao invalidar o token");
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Erro ao realizar logout: " + e.getMessage());
        }
    }

}
