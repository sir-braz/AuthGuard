package br.com.authguard.backend.controller;

import br.com.authguard.backend.dto.LoginRequest;
import br.com.authguard.backend.dto.LoginResponse;
import br.com.authguard.backend.dto.RegisterRequest;
import br.com.authguard.backend.service.AuthService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*", allowedHeaders = "Content-Type", methods = {RequestMethod.GET, RequestMethod.POST})
public class AuthController {

    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest registerRequest) {
        try {
            // Chama o serviço de registro, que agora retorna uma string
            String responseMessage = authService.registerUser(registerRequest);

            // Retorna a mensagem com status 200 (OK)
            return ResponseEntity.ok(responseMessage);
        } catch (Exception e) {
            // Caso ocorra uma exceção, retorna uma mensagem de erro com status 400 (Bad Request)
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
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
