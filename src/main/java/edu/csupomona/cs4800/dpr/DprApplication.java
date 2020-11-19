package edu.csupomona.cs4800.dpr;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import edu.csupomona.cs4800.repositories.ComputerScienceMajorRequiredCoreRepository;
import edu.csupomona.cs4800.repositories.RoleRepository;
import edu.csupomona.cs4800.role.Role;

@SpringBootApplication
@ComponentScan(basePackages = {"edu.csupomona.cs4800"})
@EnableMongoRepositories(basePackages = "edu.csupomona.cs4800")
public class DprApplication {

	public static void main(String[] args) {
		SpringApplication.run(DprApplication.class, args);
	}
	
	@Bean
	CommandLineRunner init(RoleRepository roleRepository) {
		return args -> {
			Role userRole = roleRepository.findByRole("USER");
	        if (userRole == null) {
	            Role newUserRole = new Role();
	            newUserRole.setRole("USER");
	            roleRepository.save(newUserRole);
	        }
		};
	}
}
