package edu.csupomona.cs4800.controller;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mongodb.util.JSON;

import edu.csupomona.cs4800.course.CSCoreCourse;
import edu.csupomona.cs4800.course.CSElectives1Course;
import edu.csupomona.cs4800.course.CSElectives2Course;
import edu.csupomona.cs4800.course.CSElectives3Course;
import edu.csupomona.cs4800.course.GEAreaACourse;
import edu.csupomona.cs4800.course.GEAreaBCourse;
import edu.csupomona.cs4800.course.GEAreaCCourse;
import edu.csupomona.cs4800.course.GEAreaDCourse;
import edu.csupomona.cs4800.course.GEAreaECourse;
import edu.csupomona.cs4800.repositories.ComputerScienceMajorRequiredCoreRepository;
import edu.csupomona.cs4800.securingweb.CustomUserDetailsService;
import edu.csupomona.cs4800.user.User;
import net.minidev.json.JSONArray;

//@CrossOrigin(origins = "http://localhost:8080")
@Controller
public class LoginController {

	@Autowired
	private CustomUserDetailsService userService;

	@GetMapping(value = {"/login", "/", "/home"})
	public ModelAndView login() {
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("login");
		return modelAndView;
	}

	@GetMapping(value = "/register")
	public ModelAndView signup() {
		ModelAndView modelAndView = new ModelAndView();
		User user = new User();
		modelAndView.addObject("user", user);
		modelAndView.setViewName("register");
		return modelAndView;
	}

	@PostMapping(value = "/register")
	public ModelAndView createNewUser(User user, BindingResult bindingResult) {
		ModelAndView modelAndView = new ModelAndView();
		User userExists = userService.findUserByUsername(user.getUsername());
		if (userExists != null) {
			bindingResult.rejectValue("username", "error.user", "There is already a user with the username provided");
		}
		if(bindingResult.hasErrors()) {
			modelAndView.setViewName("register");
		}
		else {
			userService.saveUser(user);
			modelAndView.addObject("successMessage", "User has been registered successfully");
			modelAndView.addObject("user", new User());
			modelAndView.setViewName("login");
		}
		return modelAndView;
	}

	@GetMapping(value = "/dpr")
	public ModelAndView progress() {
		ModelAndView modelAndView = new ModelAndView();
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userService.findUserByUsername(auth.getName());
		modelAndView.addObject("currentUser", user);
		modelAndView.addObject("fullName", "Welcome " + user.getFullName());
		modelAndView.addObject("completedCoreCourses", user.getCompletedCore());
		modelAndView.addObject("userMessage", "Content should be visible to all users");
		modelAndView.setViewName("dpr");
		return modelAndView;
	}

	@RequestMapping(value = "/updateBIO", method = {RequestMethod.PUT, RequestMethod.GET, RequestMethod.POST})
	public ModelAndView updateBIO() {
		ModelAndView modelAndView = new ModelAndView();
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userService.findUserByUsername(auth.getName());
		modelAndView.addObject("currentUser", user);
		modelAndView.addObject("fullName", "Welcome " + user.getFullName());
		modelAndView.addObject("userMessage", "Content should be visible to all users");
		modelAndView.setViewName("updateBIO");
		userService.updateUser(user);
		return modelAndView;
	}

	ObjectMapper objectMapper = new ObjectMapper();
	@GetMapping(value="/getCompletedCoreList")
	public ResponseEntity<List<CSCoreCourse>> getCoreCompleted() {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userService.findUserByUsername(auth.getName());
		return new ResponseEntity<List<CSCoreCourse>>(user.getCompletedCore(), HttpStatus.OK);
	}
	
	@GetMapping(value="/getCompletedElectives1List")
	public ResponseEntity<List<CSElectives1Course>> getElectives1Completed() {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userService.findUserByUsername(auth.getName());
		return new ResponseEntity<List<CSElectives1Course>>(user.getCompletedElectives1(), HttpStatus.OK);
	}
	
	@GetMapping(value="/getCompletedElectives2List")
	public ResponseEntity<List<CSElectives2Course>> getElectives2Completed() {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userService.findUserByUsername(auth.getName());
		return new ResponseEntity<List<CSElectives2Course>>(user.getCompletedElectives2(), HttpStatus.OK);
	}
	
	@GetMapping(value="/getCompletedElectives3List")
	public ResponseEntity<List<CSElectives3Course>> getElectives3Completed() {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userService.findUserByUsername(auth.getName());
		return new ResponseEntity<List<CSElectives3Course>>(user.getCompletedElectives3(), HttpStatus.OK);
	}
	
	@GetMapping(value="/getCompletedAreaAList")
	public ResponseEntity<List<GEAreaACourse>> getGeAreaACompleted() {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userService.findUserByUsername(auth.getName());
		return new ResponseEntity<List<GEAreaACourse>>(user.getCompletedAreaA(), HttpStatus.OK);
	}
	
	@PutMapping(value="/updateCoreList")
	public ModelAndView updateCoreList(@RequestBody String[] jsonObjArr) {
		List<CSCoreCourse> checkedCoreCourse = new ArrayList<CSCoreCourse>();
		try {
			for (String s: jsonObjArr) {
				objectMapper.enable(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT);
				CSCoreCourse course = objectMapper.readValue(s, CSCoreCourse.class);
				checkedCoreCourse.add(course);
			}
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		ModelAndView modelAndView = new ModelAndView();
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userService.findUserByUsername(auth.getName());
		modelAndView.addObject("currentUser", user);
		modelAndView.addObject("completedCoreCourses", user.getCompletedCore());
		modelAndView.addObject("fullName", "Welcome " + user.getFullName());
		modelAndView.addObject("userMessage", "Content should be visible to all users");
		modelAndView.setViewName("dpr"); //TODO stays on the DPR page for now
		userService.updateUserCoreList(user, checkedCoreCourse);
		return modelAndView;
	}
	
	@PutMapping("/updateAreaAList")
	public ModelAndView updateAreaAList(@RequestBody String[] jsonObjArr) {
		List<GEAreaACourse> checkedCoreCourse = new ArrayList<GEAreaACourse>();
		try {
			for (String s: jsonObjArr) {
				objectMapper.enable(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT);
				GEAreaACourse course = objectMapper.readValue(s, GEAreaACourse.class);
				checkedCoreCourse.add(course);
			}
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		ModelAndView modelAndView = new ModelAndView();
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userService.findUserByUsername(auth.getName());
		modelAndView.addObject("currentUser", user);
		modelAndView.addObject("fullName", "Welcome " + user.getFullName());
		modelAndView.addObject("userMessage", "Content should be visible to all users");
		modelAndView.setViewName("dpr"); //TODO stays on the DPR page for now
		userService.updateUserAreaAList(user, checkedCoreCourse);
		return modelAndView;
	}
	
	@PutMapping("/updateAreaBList")
	public ModelAndView updateAreaBList(@RequestBody String[] jsonObjArr) {
		List<GEAreaBCourse> checkedCoreCourse = new ArrayList<GEAreaBCourse>();
		try {
			for (String s: jsonObjArr) {
				objectMapper.enable(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT);
				GEAreaBCourse course = objectMapper.readValue(s, GEAreaBCourse.class);
				checkedCoreCourse.add(course);
			}
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		ModelAndView modelAndView = new ModelAndView();
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userService.findUserByUsername(auth.getName());
		modelAndView.addObject("currentUser", user);
		modelAndView.addObject("fullName", "Welcome " + user.getFullName());
		modelAndView.addObject("userMessage", "Content should be visible to all users");
		modelAndView.setViewName("dpr"); //TODO stays on the DPR page for now
		userService.updateUserAreaBList(user, checkedCoreCourse);
		return modelAndView;
	}
	
	@PutMapping("/updateAreaCList")
	public ModelAndView updateAreaCList(@RequestBody String[] jsonObjArr) {
		List<GEAreaCCourse> checkedCoreCourse = new ArrayList<GEAreaCCourse>();
		try {
			for (String s: jsonObjArr) {
				objectMapper.enable(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT);
				GEAreaCCourse course = objectMapper.readValue(s, GEAreaCCourse.class);
				checkedCoreCourse.add(course);
			}
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		ModelAndView modelAndView = new ModelAndView();
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userService.findUserByUsername(auth.getName());
		modelAndView.addObject("currentUser", user);
		modelAndView.addObject("fullName", "Welcome " + user.getFullName());
		modelAndView.addObject("userMessage", "Content should be visible to all users");
		modelAndView.setViewName("dpr"); //TODO stays on the DPR page for now
		userService.updateUserAreaCList(user, checkedCoreCourse);
		return modelAndView;
	}
	
	@PutMapping("/updateAreaDList")
	public ModelAndView updateAreaDList(@RequestBody String[] jsonObjArr) {
		List<GEAreaDCourse> checkedCoreCourse = new ArrayList<GEAreaDCourse>();
		try {
			for (String s: jsonObjArr) {
				objectMapper.enable(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT);
				GEAreaDCourse course = objectMapper.readValue(s, GEAreaDCourse.class);
				checkedCoreCourse.add(course);
			}
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		ModelAndView modelAndView = new ModelAndView();
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userService.findUserByUsername(auth.getName());
		modelAndView.addObject("currentUser", user);
		modelAndView.addObject("fullName", "Welcome " + user.getFullName());
		modelAndView.addObject("userMessage", "Content should be visible to all users");
		modelAndView.setViewName("dpr"); //TODO stays on the DPR page for now
		userService.updateUserAreaDList(user, checkedCoreCourse);
		return modelAndView;
	}
	
	@PutMapping("/updateAreaEList")
	public ModelAndView updateAreaEList(@RequestBody String[] jsonObjArr) {
		List<GEAreaECourse> checkedCoreCourse = new ArrayList<GEAreaECourse>();
		try {
			for (String s: jsonObjArr) {
				objectMapper.enable(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT);
				GEAreaECourse course = objectMapper.readValue(s, GEAreaECourse.class);
				checkedCoreCourse.add(course);
			}
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		ModelAndView modelAndView = new ModelAndView();
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userService.findUserByUsername(auth.getName());
		modelAndView.addObject("currentUser", user);
		modelAndView.addObject("fullName", "Welcome " + user.getFullName());
		modelAndView.addObject("userMessage", "Content should be visible to all users");
		modelAndView.setViewName("dpr"); //TODO stays on the DPR page for now
		userService.updateUserAreaEList(user, checkedCoreCourse);
		return modelAndView;
	}
  
	@PutMapping("/updateElectives1List")
	public ModelAndView updateElectives1List(@RequestBody String[] jsonObjArr) {
		List<CSElectives1Course> checkedElectives1Course = new ArrayList<CSElectives1Course>();
		try {
			for (String s: jsonObjArr) {
				objectMapper.enable(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT);
				CSElectives1Course course = objectMapper.readValue(s, CSElectives1Course.class);
				checkedElectives1Course.add(course);
			}
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		ModelAndView modelAndView = new ModelAndView();
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userService.findUserByUsername(auth.getName());
		modelAndView.addObject("currentUser", user);
		modelAndView.addObject("fullName", "Welcome " + user.getFullName());
		modelAndView.addObject("userMessage", "Content should be visible to all users");
		modelAndView.setViewName("dpr"); //TODO stays on the DPR page for now
		userService.updateUserElectives1List(user, checkedElectives1Course);

		return modelAndView;
	}
	
	@PutMapping("/updateElectives2List")
	public ModelAndView updateElectives2List(@RequestBody String[] jsonObjArr) {
		List<CSElectives2Course> checkedElectives2Course = new ArrayList<CSElectives2Course>();
		try {
			for (String s: jsonObjArr) {
				objectMapper.enable(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT);
				CSElectives2Course course = objectMapper.readValue(s, CSElectives2Course.class);
				checkedElectives2Course.add(course);
			}
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		ModelAndView modelAndView = new ModelAndView();
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userService.findUserByUsername(auth.getName());
		modelAndView.addObject("currentUser", user);
		modelAndView.addObject("fullName", "Welcome " + user.getFullName());
		modelAndView.addObject("userMessage", "Content should be visible to all users");
		modelAndView.setViewName("dpr"); //TODO stays on the DPR page for now
		userService.updateUserElectives2List(user, checkedElectives2Course);
		return modelAndView;
	}
	
	@PutMapping("/updateElectives3List")
	public ModelAndView updateElectives3List(@RequestBody String[] jsonObjArr) {
		List<CSElectives3Course> checkedElectives3Course = new ArrayList<CSElectives3Course>();
		try {
			for (String s: jsonObjArr) {
				objectMapper.enable(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT);
				CSElectives3Course course = objectMapper.readValue(s, CSElectives3Course.class);
				checkedElectives3Course.add(course);
			}
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		ModelAndView modelAndView = new ModelAndView();
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userService.findUserByUsername(auth.getName());
		modelAndView.addObject("currentUser", user);
		modelAndView.addObject("fullName", "Welcome " + user.getFullName());
		modelAndView.addObject("userMessage", "Content should be visible to all users");
		modelAndView.setViewName("dpr"); //TODO stays on the DPR page for now
		userService.updateUserElectives3List(user, checkedElectives3Course);
		return modelAndView;
	}

}
