package edu.csupomona.cs4800.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import edu.csupomona.cs4800.course.CSElectives1Course;
import edu.csupomona.cs4800.course.Course;

public interface ComputerScienceMajorElectivesGroup1Repository extends MongoRepository<CSElectives1Course, String> {

	List<Course> findByCompletionStatus(String status);
}
