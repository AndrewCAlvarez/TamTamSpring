package com.Backend.Backend;

public class User {
    /*
     * "user": {
     * "id": "<long>",
     * "username": "<String>",
     * "password": "<String>",
     * "email": "<String>",
     * "income": [],
     * "expenses": []
     * }
     */
    private final long id;
    private final String username;
    private final String password;
    private final String email;

    // private final Income[] incomes;
    // private final Expense[] expenses;

    public User(long id, String username, String password, String email) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getUsername() {
        return username;
    }

    public long getId() {
        return id;
    }

}