package edu.csupomona.cs4800.dpr;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"edu.csupomona.cs4800"})
public class DprApplication {

	public static void main(String[] args) {
		SpringApplication.run(DprApplication.class, args);
	}
}
