package edu.csupomona.cs4800.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import edu.csupomona.cs4800.course.GEAreaDCourse;

public interface GEAreaDRepository extends MongoRepository<GEAreaDCourse, String> {

	List<GEAreaDCourse> findByCompletionStatus(String status);
	
	GEAreaDCourse findByCourseNumber(String status);
}
