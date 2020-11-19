package edu.csupomona.cs4800.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import edu.csupomona.cs4800.course.GEAreaACourse;
import edu.csupomona.cs4800.course.GEAreaBCourse;

public interface GEAreaBRepository extends MongoRepository<GEAreaBCourse, String> {

	List<GEAreaBCourse> findByCompletionStatus(String status);
	

	List<GEAreaBCourse> findByGeArea(String status);
	
	GEAreaBCourse findByCourseNumber(String status);
}
