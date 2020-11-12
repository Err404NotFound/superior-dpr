package edu.csupomona.cs4800.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import edu.csupomona.cs4800.course.CSElectives2Course;
import edu.csupomona.cs4800.course.Course;

public interface ComputerScienceMajorElectivesGroup2Repository extends MongoRepository<CSElectives2Course, String> {

	List<Course> findByCompletionStatus(String status);
}
