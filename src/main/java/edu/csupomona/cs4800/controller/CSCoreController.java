package edu.csupomona.cs4800.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.csupomona.cs4800.course.CSCoreCourse;
import edu.csupomona.cs4800.course.CSElectives1Course;
import edu.csupomona.cs4800.course.CSElectives2Course;
import edu.csupomona.cs4800.course.CSElectives3Course;
import edu.csupomona.cs4800.course.Course;
import edu.csupomona.cs4800.repositories.ComputerScienceMajorElectivesGroup1Repository;
import edu.csupomona.cs4800.repositories.ComputerScienceMajorRequiredCoreRepository;
import edu.csupomona.cs4800.repositories.ComputerScienceMajorElectivesGroup2Repository;
import edu.csupomona.cs4800.repositories.ComputerScienceMajorElectivesGroup3Repository;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/cscore")
public class CSCoreController {

	@Autowired
	MongoTemplate mongoTemplate;
	
	@Autowired
	private ComputerScienceMajorRequiredCoreRepository csCoreRepository;
	

	@Autowired
	private ComputerScienceMajorElectivesGroup1Repository csElectives1Repository;
	

	@Autowired
	private ComputerScienceMajorElectivesGroup2Repository csElectives2Repository;
	

	@Autowired
	private ComputerScienceMajorElectivesGroup3Repository csElectives3Repository;
	
	@GetMapping 
	public List<CSCoreCourse> getAll() {
		return csCoreRepository.findAll();
	}
	
	@GetMapping (value="/elective1/list")
	public List<CSElectives1Course> getAllElectives1() {
		return csElectives1Repository.findAll();
	}
	
	@GetMapping (value="/elective2/list")
	public List<CSElectives2Course> getAllElectives2() {
		return csElectives2Repository.findAll();
	}
	
	@GetMapping (value="/elective3/list")
	public List<CSElectives3Course> getAllElectives3() {
		return csElectives3Repository.findAll();
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
