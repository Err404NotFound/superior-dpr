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
import edu.csupomona.cs4800.course.CSElectives1Course;
import edu.csupomona.cs4800.course.CSElectives2Course;
import edu.csupomona.cs4800.course.CSElectives3Course;
import edu.csupomona.cs4800.course.Course;
import edu.csupomona.cs4800.repositories.ComputerScienceMajorElectivesGroup1Repository;
import edu.csupomona.cs4800.repositories.ComputerScienceMajorElectivesGroup2Repository;
import edu.csupomona.cs4800.repositories.ComputerScienceMajorElectivesGroup3Repository;
import edu.csupomona.cs4800.repositories.ComputerScienceMajorRequiredCoreRepository;


import edu.csupomona.cs4800.course.GEAreaACourse;
import edu.csupomona.cs4800.course.GEAreaBCourse;
import edu.csupomona.cs4800.course.GEAreaCCourse;
import edu.csupomona.cs4800.course.GEAreaDCourse;
import edu.csupomona.cs4800.course.GEAreaECourse;

import edu.csupomona.cs4800.repositories.GEAreaARepository;
import edu.csupomona.cs4800.repositories.GEAreaBRepository;
import edu.csupomona.cs4800.repositories.GEAreaCRepository;
import edu.csupomona.cs4800.repositories.GEAreaDRepository;
import edu.csupomona.cs4800.repositories.GEAreaERepository;


@RestController
@RequestMapping("/ge")
public class GEController {

	@Autowired
	MongoTemplate mongoTemplate;
	
	//ge repos
		@Autowired
		private GEAreaARepository geAreaARepository;
		@Autowired
		private GEAreaBRepository geAreaBRepository;
		@Autowired
		private GEAreaCRepository geAreaCRepository;
		@Autowired
		private GEAreaDRepository geAreaDRepository;
		@Autowired
		private GEAreaERepository geAreaERepository;
		
		@GetMapping(value="/areaA")
		public List<GEAreaACourse> getAllGEAreaA() {
			return geAreaARepository.findAll();
		}
		@GetMapping(value="/areaB")
		public List<GEAreaBCourse> getAllGEAreaB() {
			return geAreaBRepository.findAll();
		}
		@GetMapping(value="/areaC")
		public List<GEAreaCCourse> getAllGEAreaC() {
			return geAreaCRepository.findAll();
		}
		@GetMapping(value="/areaD")
		public List<GEAreaDCourse> getAllGEAreaD() {
			return geAreaDRepository.findAll();
		}
		@GetMapping(value="/areaE")
		public List<GEAreaECourse> getAllGEAreaE() {
			return geAreaERepository.findAll();
		}
		
	
	@GetMapping(value = "/list")
	public String listString() {
		String geClasses = "";
		List<GEAreaACourse> courses = geAreaARepository.findAll();
		for(GEAreaACourse c: courses) {
			geClasses += String.format("%s<br>", c.toString());
		}
		return geClasses;
	}
	
	@GetMapping(value = "/{id}")
	public GEAreaACourse getOne(@PathVariable String id) {
		return geAreaARepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException());
	}
	
}
