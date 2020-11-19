package edu.csupomona.cs4800.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import edu.csupomona.cs4800.course.GEAreaACourse;
import edu.csupomona.cs4800.course.GEAreaECourse;

public interface GEAreaERepository extends MongoRepository<GEAreaECourse, String> {

	List<GEAreaECourse> findByCompletionStatus(String status);
	

	List<GEAreaECourse> findByGeArea(String status);
	
	GEAreaECourse findByCourseNumber(String status);
}
