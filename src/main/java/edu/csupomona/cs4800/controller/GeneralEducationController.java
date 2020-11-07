//package edu.csupomona.cs4800.controller;
//
////public class GeneralEducationController {
//
////}
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.rest.webmvc.ResourceNotFoundException;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import edu.csupomona.cs4800.course.Course;
//import edu.csupomona.cs4800.repositories.GeneralEducationAreaARepository;
//
//@CrossOrigin
//@RestController
//@RequestMapping("/ge/b")
//public class GeneralEducationController {
//
//	@Autowired
//	private GeneralEducationAreaARepository geRepository;
//	
//	@GetMapping(value="/all")
//	public List<Course> getAll() {
//		return geRepository.findAll();
//	}
//	
//	@GetMapping(value = "/list")
//	public String listString() {
//		String coreClasses = "";
//		List<Course> courses = geRepository.findAll();
//		for(Course c: courses) {
//			coreClasses += String.format("%s<br>", c.toString());
//		}
//		return coreClasses;
//	}
//	
//	@GetMapping(value = "/{id}")
//	public Course getOne(@PathVariable String id) {
//		return geRepository.findById(id)
//				.orElseThrow(() -> new ResourceNotFoundException());
//	}
//	/*
//	@PostMapping("/addCourse")
//	public ResponseEntity<Course> createCourse(@RequestBody Course course) {
//	  try {
//	    Course _course = GeneralEducationAreaARepository.save(new Course(course.getCourseNumber(), Course.getCourseName(), false));
//	    return new ResponseEntity<>(_course, HttpStatus.CREATED);
//	  } catch (Exception e) {
//	    return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//	  }
//	}*/
//}
