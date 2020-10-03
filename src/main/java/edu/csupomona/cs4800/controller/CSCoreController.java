package edu.csupomona.cs4800.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.csupomona.cs4800.courses.ComputerScienceMajorRequiredCore;
import edu.csupomona.cs4800.repositories.ComputerScienceMajorRequiredCoreRepository;

@RestController
@RequestMapping("/cscore")
public class CSCoreController {

	@Autowired
	private ComputerScienceMajorRequiredCoreRepository csCoreRepository;
	
	@GetMapping
	public List<ComputerScienceMajorRequiredCore> getAll() {
		return csCoreRepository.findAll();
	}
	
	@GetMapping(value = "/{id}")
	public ComputerScienceMajorRequiredCore getOne(@PathVariable String id) {
		return csCoreRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException());
	}
}
