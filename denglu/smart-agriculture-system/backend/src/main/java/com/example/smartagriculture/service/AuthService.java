package com.example.smartagriculture.service;

import com.example.smartagriculture.model.User;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class AuthService {

    private Map<String, User> userDatabase = new HashMap<>();

    public User register(String username, String password, String role) {
        if (userDatabase.containsKey(username)) {
            throw new RuntimeException("User already exists");
        }
        User newUser = new User(username, password, role);
        userDatabase.put(username, newUser);
        return newUser;
    }

    public User login(String username, String password) {
        User user = userDatabase.get(username);
        if (user == null || !user.getPassword().equals(password)) {
            throw new RuntimeException("Invalid username or password");
        }
        return user;
    }
}