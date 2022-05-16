package com.Backend.Backend;

import java.util.HashMap;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.HttpStatus;

@Controller // This means that this class is a Controller
@RequestMapping(path = "/demo") // This means URL's start with /demo (after Application path)
public class MainController {
    @Autowired // This means to get the bean called userRepository
    // Which is auto-generated by Spring, we will use it to handle the data
    private UserRepository userRepository;

    @CrossOrigin("http://localhost:8081")
    @PostMapping(path = "/add") // Map ONLY POST Requests
    public @ResponseBody String addNewUser(@Valid @RequestParam String name, @RequestParam String email) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request

        User n = new User();
        n.setName(name);
        n.setEmail(email);
        userRepository.save(n);
        return "Saved";
    }

    // @CrossOrigin("http://localhost:3000")
    @GetMapping(path = "/all")
    public @ResponseBody Iterable<User> getAllUsers() {
        // This returns a JSON or XML with the users
        return userRepository.findAll();
    }

    // @ResponseStatus(HttpStatus.BAD_REQUEST)
    // @ExceptionHandler(MethodArgumentNotValidException.class)
    // public Map<String, String>
    // handleMethodArgumentNotValid(MethodArgumentNotValidException ex) {
    // Map<String, String> errors = new HashMap<>();

    // ex.getBindingResult().getFieldErrors()
    // .forEach(error -> errors.put(error.getField(), error.getDefaultMessage()));

    // return errors;
    // }

    // @GetMapping("/users/{id}")
    // EntityModel<User> one(@PathVariable Long id) {

    // User user = userRepository.findById(id) //
    // .orElseThrow(() -> new EmployeeNotFoundException(id));

    // return EntityModel.of(user, //
    // linkTo(methodOn(User.class).one(id)).withSelfRel(),
    // linkTo(methodOn(User.class).all()).withRel("employees"));
    // }

}