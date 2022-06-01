package com.Backend.Backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @GetMapping("/users")
    public User getUsers() {
        return new User(1, "fbaggins", "precious123", "baggins@bagend.com");
    }
}