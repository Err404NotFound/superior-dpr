package edu.csupomona.cs4800.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WebController {

	@RequestMapping(value = "", method = RequestMethod.GET)
	public String endpoints() {
		return String.format("There are other pages at: /hello and /serena and /world");
	}
	
	@RequestMapping(value = "/hello", method = RequestMethod.GET)
	public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
		return String.format("Hello %s!", name);
	}

  @RequestMapping(value = "/world", method = RequestMethod.GET)
  public String world() {
    return String.format("Matthew Graca wuz here x2");
  }
}
