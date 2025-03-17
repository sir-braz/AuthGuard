package com.pao.facil.paofacil_backend;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.content;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.pao.facil.paofacil_backend.controller.AuthController;
import com.pao.facil.paofacil_backend.dto.LoginRequest;
import com.pao.facil.paofacil_backend.dto.LoginResponse;
import com.pao.facil.paofacil_backend.service.AuthService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;
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

    // Teste do login
    @Test
    public void testLogin() throws Exception {
        // Simula o comportamento do AuthService
        when(authService.authenticate(any(LoginRequest.class)))
                .thenReturn(new LoginResponse("mockToken"));

        mockMvc.perform(post("/auth/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"username\":\"testuser\", \"password\":\"testpass\"}"))
                .andExpect(status().isOk());
    }

    @Test
    public void testLogout() throws Exception {
        // Simula o comportamento do método logout que retorna um booleano
        when(authService.logout(anyString())).thenReturn(true);

        // Cria um JSON para enviar no cabeçalho Authorization
        String token = "mockToken";

        mockMvc.perform(post("/auth/logout")
                        .header("Authorization", "Bearer " + token))  // Certifique-se de passar o token corretamente
                .andExpect(status().isOk())  // Verifica se o status HTTP é OK (200)
                .andExpect(result -> assertEquals("Logout realizado com sucesso", result.getResponse().getContentAsString()));
    }


}
