package edu.csupomona.cs4800.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

	@RequestMapping(value = "/hello", method = RequestMethod.GET)
	public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
		return String.format("Hello %s!", name);
	}
	
	@RequestMapping(value = "/serena", method = RequestMethod.GET)
	public String serena(@RequestParam(value = "something", defaultValue = "serena") String name) {
		return String.format("%s is very tired!", name);
	}
}
