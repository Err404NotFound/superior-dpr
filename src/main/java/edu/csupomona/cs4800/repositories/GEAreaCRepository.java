package edu.csupomona.cs4800.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import edu.csupomona.cs4800.course.GEAreaACourse;
import edu.csupomona.cs4800.course.GEAreaCCourse;

public interface GEAreaCRepository extends MongoRepository<GEAreaCCourse, String> {

	List<GEAreaCCourse> findByCompletionStatus(String status);
	
	List<GEAreaCCourse> findByGeArea(String status);
	
	GEAreaCCourse findByCourseNumber(String status);
}
