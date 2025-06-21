package com.restaurant.backend.service;

import com.restaurant.backend.entity.User;
import com.restaurant.backend.enums.UserRoles;
import com.restaurant.backend.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository repo, PasswordEncoder encoder) {
        this.userRepository = repo;
        this.passwordEncoder = encoder;
    }

    public User register(User registerUser) {

        if (userRepository.findByUsername(registerUser.getUsername()).isPresent()) {
            throw new RuntimeException("Username already taken");
        }

        User user = new User();
        user.setUsername(registerUser.getUsername());
        user.setPassword(passwordEncoder.encode(registerUser.getPassword()));
        user.setFirstName(registerUser.getFirstName());
        user.setLastName(registerUser.getLastName());
        user.setEmail(registerUser.getEmail());
        user.setPhoneNumber(registerUser.getPhoneNumber());
        user.setRole(registerUser.getRole()==null ? UserRoles.CUSTOMER:UserRoles.valueOf(registerUser.getRole().toString()));

        return userRepository.save(user);
    }
}
