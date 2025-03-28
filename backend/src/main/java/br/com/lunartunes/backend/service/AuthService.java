package br.com.lunartunes.backend.service;

import br.com.lunartunes.backend.dto.LoginRequest;
import br.com.lunartunes.backend.dto.LoginResponse;
import br.com.lunartunes.backend.dto.RegisterRequest;
import br.com.lunartunes.backend.entity.User;

import br.com.lunartunes.backend.repository.UserRepository;
import com.pao.facil.paofacil_backend.util.JwtTokenProvider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private static final Logger logger = LoggerFactory.getLogger(AuthService.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    public String registerUser(RegisterRequest registerRequest) {
        if (userRepository.findByUsername(registerRequest.getUsername()).isPresent()) {
            logger.warn("Tentativa de registro com nome de usuário já em uso: {}", registerRequest.getUsername());
            throw new RuntimeException("Nome de usuário já em uso.");
        }

        User user = new User();
        user.setUsername(registerRequest.getUsername());
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        userRepository.save(user);
        logger.info("Usuário registrado com sucesso: {}", registerRequest.getUsername());

        return "Usuário registrado com sucesso"; // Aqui retornamos a mensagem de sucesso
    }





    public LoginResponse authenticate(LoginRequest loginRequest) {
        User user = userRepository.findByUsername(loginRequest.getUsername())
                .orElseThrow(() -> {
                    logger.error("Usuário não encontrado: {}", loginRequest.getUsername());
                    return new RuntimeException("Usuário não encontrado");
                });

        if (!passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
            logger.error("Senha inválida para o usuário: {}", loginRequest.getUsername());
            throw new RuntimeException("Senha inválida");
        }

        String token = jwtTokenProvider.generateToken(user.getUsername());
        logger.info("Login bem-sucedido para o usuário: {}", loginRequest.getUsername());
        return new LoginResponse(token);
    }

    public void logout(String token) {
        if (token == null || token.isEmpty()) {
            logger.warn("Tentativa de logout com token inválido.");
            throw new RuntimeException("Token inválido.");
        }

        logger.info("Usuário deslogado com sucesso. Token: {}", token);
        // Adicione lógica para invalidar o token, se necessário
    }
}
