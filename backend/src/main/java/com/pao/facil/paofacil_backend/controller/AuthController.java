package com.pao.facil.paofacil_backend.controller;

import com.pao.facil.paofacil_backend.dto.LoginRequest;
import com.pao.facil.paofacil_backend.dto.LoginResponse;
import com.pao.facil.paofacil_backend.dto.RegisterRequest;
import com.pao.facil.paofacil_backend.service.AuthService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "Content-Type", methods = {RequestMethod.GET, RequestMethod.POST})
public class AuthController {

    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest registerRequest) {
        try {
            logger.info("Tentativa de registro de usuário: {}", registerRequest.getUsername());
            authService.registerUser(registerRequest);
            logger.info("Usuário registrado com sucesso: {}", registerRequest.getUsername());
            return ResponseEntity.ok("Usuário registrado com sucesso");
        } catch (Exception e) {
            logger.error("Erro ao registrar usuário: {}", registerRequest.getUsername(), e);
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        try {
            logger.info("Tentativa de login para usuário: {}", loginRequest.getUsername());
            LoginResponse response = authService.authenticate(loginRequest);
            logger.info("Login bem-sucedido para o usuário: {}", loginRequest.getUsername());
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            logger.error("Falha no login para o usuário: {}", loginRequest.getUsername(), e);
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/me")
    public ResponseEntity<String> getUserInfo(Authentication authentication) {
        if (authentication != null) {
            logger.info("Usuário autenticado: {}", authentication.getName());
            return ResponseEntity.ok("Usuário autenticado: " + authentication.getName());
        }
        logger.warn("Tentativa de acesso sem autenticação");
        return ResponseEntity.badRequest().body("Usuário não autenticado");
    }

    @PostMapping("/logout") // Certifique-se de que esta anotação está correta
    public ResponseEntity<String> logout(@RequestHeader("Authorization") String authHeader) {
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7); // Remove "Bearer " para obter apenas o token real
            authService.logout(token);
            return ResponseEntity.ok("Logout realizado com sucesso");
        }
        return ResponseEntity.badRequest().body("Token inválido ou ausente");
    }

}
