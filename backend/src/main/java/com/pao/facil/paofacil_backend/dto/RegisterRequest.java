package com.pao.facil.paofacil_backend.dto;

public class RegisterRequest {

    private String username;
    private String password;

    // Construtor padrão
    public RegisterRequest() {
    }

    // Construtor com parâmetros
    public RegisterRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }

    // Getters e Setters
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
