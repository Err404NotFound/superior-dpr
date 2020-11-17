package edu.csupomona.cs4800.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import edu.csupomona.cs4800.securingweb.CustomUserDetailsService;
import edu.csupomona.cs4800.user.User;

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
	
	@RequestMapping(value="/updateCoreList", method={RequestMethod.PUT})
	public ModelAndView updateCoreList() {
		ModelAndView modelAndView = new ModelAndView();
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userService.findUserByUsername(auth.getName());
		modelAndView.addObject("currentUser", user);
		modelAndView.addObject("fullName", "Welcome " + user.getFullName());
		modelAndView.addObject("userMessage", "Content should be visible to all users");
		modelAndView.setViewName("dpr"); //TODO stays on the DPR page for now
		userService.updateUser(user); //TODO change this to updateUserCoreList method
		return modelAndView;
	}
}
