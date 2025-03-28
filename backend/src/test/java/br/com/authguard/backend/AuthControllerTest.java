package br.com.authguard.backend;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;

import br.com.authguard.backend.controller.AuthController;
import br.com.authguard.backend.dto.LoginRequest;
import br.com.authguard.backend.dto.LoginResponse;
import br.com.authguard.backend.dto.RegisterRequest;
import br.com.authguard.backend.service.AuthService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.ArgumentCaptor;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

@SpringBootTest
public class AuthControllerTest {

    private MockMvc mockMvc;

    @Mock
    private AuthService authService;

    @InjectMocks
    private AuthController authController;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(authController).build();
    }

    @Test
    public void testRegister() throws Exception {
        // Criando um objeto RegisterRequest de exemplo
        RegisterRequest registerRequest = new RegisterRequest("testuser", "testpassword");

        // Simulando o comportamento do AuthService com o retorno da mensagem
        when(authService.registerUser(any(RegisterRequest.class)))
                .thenReturn("Usuário registrado com sucesso");

        // Executa a requisição de registro
        mockMvc.perform(post("/api/auth/register")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"username\":\"testuser\", \"password\":\"testpassword\"}"))
                .andExpect(status().isOk()) // Verifica que o status é OK
                .andExpect(content().string("Usuário registrado com sucesso")); // Verifica a resposta do corpo

        // Verifica se o método registerUser foi chamado corretamente
        verify(authService).registerUser(any(RegisterRequest.class));
    }

    // Teste do login
    @Test
    public void testLogin() throws Exception {
        // Criando um objeto LoginRequest de exemplo
        LoginRequest loginRequest = new LoginRequest("testuser", "testpass");

        // Simulando a resposta do AuthService
        LoginResponse loginResponse = new LoginResponse("mockToken");
        when(authService.authenticate(any(LoginRequest.class))).thenReturn(loginResponse);

        mockMvc.perform(post("/api/auth/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"username\":\"testuser\", \"password\":\"testpass\"}"))
                .andExpect(status().isOk())
                .andExpect(content().json("{\"token\":\"mockToken\"}"));

        // ArgumentCaptor para capturar o LoginRequest passado para o authenticate
        ArgumentCaptor<LoginRequest> captor = ArgumentCaptor.forClass(LoginRequest.class);
        verify(authService).authenticate(captor.capture());

        // Verifica se o username e a senha são os esperados
        assertEquals("testuser", captor.getValue().getUsername());
        assertEquals("testpass", captor.getValue().getPassword());
    }

    // Teste do logout
    @Test
    public void testLogout() throws Exception {
        // Simulando o comportamento do AuthService para o logout
        doNothing().when(authService).logout(anyString());

        // Token de teste
        String token = "mockToken";

        mockMvc.perform(post("/api/auth/logout")
                        .header("Authorization", "Bearer " + token))
                .andExpect(status().isOk())
                .andExpect(content().string("Logout realizado com sucesso"));

        // Verifica se o método logout foi chamado corretamente
        verify(authService).logout(eq("mockToken"));
    }


}
