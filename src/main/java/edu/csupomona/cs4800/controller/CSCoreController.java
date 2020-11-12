package edu.csupomona.cs4800.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.csupomona.cs4800.course.CSCoreCourse;
import edu.csupomona.cs4800.course.Course;
import edu.csupomona.cs4800.repositories.ComputerScienceMajorRequiredCoreRepository;

@RestController
@RequestMapping("/cscore")
public class CSCoreController {

	@Autowired
	MongoTemplate mongoTemplate;
	
	@Autowired
	private ComputerScienceMajorRequiredCoreRepository csCoreRepository;
	
	@GetMapping
	public List<CSCoreCourse> getAll() {
		return csCoreRepository.findAll();
	}
	
	@GetMapping(value = "/list")
	public String listString() {
		String coreClasses = "";
		List<CSCoreCourse> courses = csCoreRepository.findAll();
		for(Course c: courses) {
			coreClasses += String.format("%s<br>", c.toString());
		}
		return coreClasses;
	}
	
	@GetMapping(value = "/{id}")
	public Course getOne(@PathVariable String id) {
		return csCoreRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException());
	}
}
