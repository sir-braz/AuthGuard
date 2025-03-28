package br.com.authguard.backend.dto;

public class LoginResponse {

    private String token;

    // Construtores
    public LoginResponse() {
    }

    public LoginResponse(String token) {
        this.token = token;
    }

    // Getter e Setter
    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
