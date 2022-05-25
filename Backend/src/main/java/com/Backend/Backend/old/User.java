// // NOTE: This is old code that needs to be removed or reviewed.

// package com.Backend.Backend.old;

// import javax.persistence.Entity;
// import javax.persistence.GeneratedValue;
// import javax.persistence.GenerationType;
// import javax.persistence.Id;
// import javax.validation.constraints.*;

// @Entity
// public class User {
// @Id
// @GeneratedValue(strategy = GenerationType.AUTO)
// private Long id;

// @NotNull
// @Size(min = 2, message = "Name should contain at least two characters.")
// private String name;

// @Email(message = "Email should be valid.")
// private String email;

// public Long getId() {
// return id;
// }

// public void setId(Long id) {
// this.id = id;
// }

// public String getName() {
// return name;
// }

// public void setName(String name) {
// this.name = name;
// }

// public String getEmail() {
// return email;
// }

// public void setEmail(String email) {
// this.email = email;
// }
// }
