package com.example.paoFacil.repository;

import com.example.paoFacil.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    // Método para encontrar um usuário pelo nome de usuário
    Optional<User> findByUsername(String username);

    // Verifica se já existe um usuário com o nome de usuário especificado
    boolean existsByUsername(String username);
}
