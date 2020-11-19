package edu.csupomona.cs4800.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
		
		@GetMapping(value="/areaA1")
		public List<GEAreaACourse> getAllGEAreaA1() {
			return geAreaARepository.findByGeArea("A1");
		}
		
		@GetMapping(value="/areaA2")
		public List<GEAreaACourse> getAllGEAreaA2() {
			return geAreaARepository.findByGeArea("A2");
		}
		@GetMapping(value="/areaA3")
		public List<GEAreaACourse> getAllGEAreaA3() {
			return geAreaARepository.findByGeArea("A3");
		}
		
		
		@GetMapping(value="/areaB")
		public List<GEAreaBCourse> getAllGEAreaB() {
			return geAreaBRepository.findAll();
		}
		
		@GetMapping(value="/areaB1")
		public List<GEAreaBCourse> getAllGEAreaB1() {
			return geAreaBRepository.findByGeArea("B1");
		}
		@GetMapping(value="/areaB2")
		public List<GEAreaBCourse> getAllGEAreaB2() {
			return geAreaBRepository.findByGeArea("B2");
		}
		@GetMapping(value="/areaB3")
		public List<GEAreaBCourse> getAllGEAreaB3() {
			return geAreaBRepository.findByGeArea("B3");
		}
		@GetMapping(value="/areaB4")
		public List<GEAreaBCourse> getAllGEAreaB4() {
			return geAreaBRepository.findByGeArea("B4");
		}
		@GetMapping(value="/areaB5")
		public List<GEAreaBCourse> getAllGEAreaB5() {
			return geAreaBRepository.findByGeArea("B5");
		}
		
		@GetMapping(value="/areaC")
		public List<GEAreaCCourse> getAllGEAreaC() {
			return geAreaCRepository.findAll();
		}
		@GetMapping(value="/areaC1")
		public List<GEAreaCCourse> getAllGEAreaC1() {
			return geAreaCRepository.findByGeArea("C1");
		}
		@GetMapping(value="/areaC2")
		public List<GEAreaCCourse> getAllGEAreaC2() {
			return geAreaCRepository.findByGeArea("C2");
		}
		@GetMapping(value="/areaC3")
		public List<GEAreaCCourse> getAllGEAreaC3() {
			return geAreaCRepository.findByGeArea("C3");
		}
		
		@GetMapping(value="/areaD")
		public List<GEAreaDCourse> getAllGEAreaD() {
			return geAreaDRepository.findAll();
		}
		@GetMapping(value="/areaD1")
		public List<GEAreaDCourse> getAllGEAreaD1() {
			return geAreaDRepository.findByGeArea("D1");
		}
		@GetMapping(value="/areaD2")
		public List<GEAreaDCourse> getAllGEAreaD2() {
			return geAreaDRepository.findByGeArea("D2");
		}
		@GetMapping(value="/areaD3")
		public List<GEAreaDCourse> getAllGEAreaD3() {
			return geAreaDRepository.findByGeArea("D3");
		}
		@GetMapping(value="/areaD4")
		public List<GEAreaDCourse> getAllGEAreaD4() {
			return geAreaDRepository.findByGeArea("D4");
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
