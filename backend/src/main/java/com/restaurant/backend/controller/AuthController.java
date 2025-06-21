package com.restaurant.backend.controller;

import com.restaurant.backend.entity.User;
import com.restaurant.backend.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserService userService;

    public AuthController(UserService service) {
        this.userService = service;
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User request) {
        User user = userService.register(request);
        return ResponseEntity.ok(user);
    }
}
