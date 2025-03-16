package com.pao.facil.paofacil_backend.repository;

import com.pao.facil.paofacil_backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, Long> {
}
