package edu.csupomona.cs4800.dpr;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import edu.csupomona.cs4800.repositories.ComputerScienceMajorRequiredCoreRepository;
import edu.csupomona.cs4800.repositories.GeneralEducationAreaBRepository;

@SpringBootApplication
@ComponentScan(basePackages = {"edu.csupomona.cs4800"})

@EnableMongoRepositories(basePackages = "edu.csupomona.cs4800")
public class DprApplication {

//	@Bean
//	private GeneralEducationAreaARepository geRepository() {
//		return new GeneralEducationAreaARepository();
//	}
//	
//	@Bean
//	private GeneralEducationAreaBRepository gebsRepository() {
//		return new GeneralEducationAreaBRepository();
//	}
	@Bean
	  public WebMvcConfigurer corsConfigurer() {
	    return new WebMvcConfigurer() {
	      @Override
	      public void addCorsMappings(CorsRegistry registry) {
	       registry.addMapping("/**").allowedOrigins("http://localhost:4200")
	                      .allowedMethods("PUT", "DELETE", "GET", "POST");
	      }
	    };
	  }
	public static void main(String[] args) {
		SpringApplication.run(DprApplication.class, args);
	}
	
	
}
