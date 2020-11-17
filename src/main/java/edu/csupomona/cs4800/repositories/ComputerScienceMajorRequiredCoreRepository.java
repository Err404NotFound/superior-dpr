package edu.csupomona.cs4800.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import edu.csupomona.cs4800.course.CSCoreCourse;

public interface ComputerScienceMajorRequiredCoreRepository extends MongoRepository<CSCoreCourse, String> {

	List<CSCoreCourse> findByCompletionStatus(String status);
	
	CSCoreCourse findByCourseNumber(String status);

}
