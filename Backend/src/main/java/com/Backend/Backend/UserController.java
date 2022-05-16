// REST service using documentation at: 
// https://www.codejava.net/frameworks/spring-boot/spring-boot-restful-crud-api-examples-with-mysql-database

package com.Backend.Backend;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;

import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    private UserRepository repository;

    UserController(UserRepository repository) {
        this.repository = repository;
    }

    // RESTful API methods for Retrieval operations
    @CrossOrigin("http://localhost:3000")
    @GetMapping("/users")
    List<User> all() {
        return repository.findAll();
    }

    // Find single by id
    @CrossOrigin("http://localhost:8081")
    @GetMapping("/users/{id}")
    User one(@PathVariable Long id) {

        return repository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    // RESTful API method for Create operation
    @CrossOrigin("http://localhost:8081")
    @PostMapping("/users")
    User newUser(@RequestBody User newUser) {
        return repository.save(newUser);
    }

    // RESTful API method for Update operation
    @CrossOrigin("http://localhost:8081")
    @PutMapping("/users/{id}")
    User replaceUser(@RequestBody User newUser, @PathVariable Long id) {
        System.out.println("\n\n\n\nPUT REQUEST\n\n\n\n\n");
        return repository.findById(id)
                .map(user -> {
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    return repository.save(user);
                })
                .orElseGet(() -> {
                    newUser.setId(id);
                    return repository.save(newUser);
                });
    }

    // RESTful API method for Delete operation
    @CrossOrigin("http://localhost:8081")
    @DeleteMapping("/users/{id}")
    void deleteEmployee(@PathVariable Long id) {
        System.out.println("\n\n\n\nDELETE REQUEST\n\n\n\n");
        repository.deleteById(id);
    }
}
