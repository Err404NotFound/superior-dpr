package edu.csupomona.cs4800.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import edu.csupomona.cs4800.course.GEAreaACourse;

public interface GEAreaARepository extends MongoRepository<GEAreaACourse, String>{

	List<GEAreaACourse> findByCompletionStatus(String status);
	
	GEAreaACourse findByCourseNumber(String status);
}
