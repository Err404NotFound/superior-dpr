package edu.csupomona.cs4800.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import edu.csupomona.cs4800.user.User;

public interface ComputerScienceStudentRepository extends MongoRepository<User, String> {
	
	User findByUsername(String username);
	
}
