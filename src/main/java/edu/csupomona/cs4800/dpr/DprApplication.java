package edu.csupomona.cs4800.dpr;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import edu.csupomona.cs4800.repositories.ComputerScienceMajorRequiredCoreRepository;

@SpringBootApplication
@ComponentScan(basePackages = {"edu.csupomona.cs4800"})
@EnableMongoRepositories(basePackageClasses = ComputerScienceMajorRequiredCoreRepository.class)
public class DprApplication {

	public static void main(String[] args) {
		SpringApplication.run(DprApplication.class, args);
	}
}
