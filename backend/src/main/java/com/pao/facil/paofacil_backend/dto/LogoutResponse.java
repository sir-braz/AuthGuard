package com.pao.facil.paofacil_backend.dto;

public class LogoutResponse {
    private String message;

    public LogoutResponse(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}
