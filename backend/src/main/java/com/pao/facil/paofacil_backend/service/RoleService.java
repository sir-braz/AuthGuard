package com.pao.facil.paofacil_backend.service;

import com.pao.facil.paofacil_backend.entity.Role;
import com.pao.facil.paofacil_backend.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RoleService {

    @Autowired
    private RoleRepository roleRepository;

    // Método para salvar um novo papel (role)
    public Role saveRole(Role role) {
        return roleRepository.save(role);
    }

    // Método para buscar papel pelo ID
    public Optional<Role> getRoleById(Long id) {
        return roleRepository.findById(id);
    }

    // Método para buscar papel pelo nome (se necessário)
    public Optional<Role> getRoleByName(String roleName) {
        return roleRepository.findByName(roleName);
    }

}
