package edu.csupomona.cs4800.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import edu.csupomona.cs4800.role.Role;

public interface RoleRepository extends MongoRepository<Role, String> {

	Role findByRole(String name);
}
