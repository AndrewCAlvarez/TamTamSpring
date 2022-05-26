package com.Backend.Backend.repository;

import org.springframework.data.repository.CrudRepository;
import com.Backend.Backend.model.User;

/**
 * UserRepository
 */
public interface UserRepository extends CrudRepository<User, Long> {

}