package br.com.authguard.backend.service;


import br.com.authguard.backend.entity.User;
import br.com.authguard.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Método para encontrar um usuário pelo ID
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    // Método para encontrar um usuário pelo nome de usuário
    public Optional<User> getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    // Método para atualizar o usuário
    public boolean updateUser(Long id, User updatedUser) {
        Optional<User> userOptional = userRepository.findById(id);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            user.setUsername(updatedUser.getUsername());
            user.setPassword(updatedUser.getPassword());
            // Pode ser necessário codificar a senha novamente
            user.setPassword(updatedUser.getPassword());
            userRepository.save(user);
            return true;
        }
        return false; // Caso o usuário não seja encontrado
    }

    // Método para deletar o usuário
    public boolean deleteUser(Long id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return true;
        }
        return false; // Caso o usuário não seja encontrado
    }

    // Método para listar todos os usuários (opcional)
    public Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }
}
