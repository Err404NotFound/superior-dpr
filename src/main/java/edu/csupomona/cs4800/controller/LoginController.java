package edu.csupomona.cs4800.controller;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
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
import edu.csupomona.cs4800.repositories.ComputerScienceMajorRequiredCoreRepository;
import edu.csupomona.cs4800.securingweb.CustomUserDetailsService;
import edu.csupomona.cs4800.user.User;
import net.minidev.json.JSONArray;

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
	public ModelAndView dpr() {
		ModelAndView modelAndView = new ModelAndView();
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userService.findUserByUsername(auth.getName());
		modelAndView.addObject("currentUser", user);
		modelAndView.addObject("fullName", "Welcome " + user.getFullName());
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
	@PutMapping("/updateCoreList")
	  public ModelAndView updateTutorial(@RequestBody String[] jsonObjArr) {
		List<CSCoreCourse> listCourse = new ArrayList<CSCoreCourse>();
		try {
			for (String s: jsonObjArr) {
				objectMapper.enable(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT);
				listCourse.add(objectMapper.readValue(s,CSCoreCourse.class));
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
		userService.updateUserCoreList(user,listCourse);		
		return modelAndView;
	}
	
//TODO create @PutMapping for '/updateElectives1List', '/updateElectives2List', '/updateElectives3List';
}
