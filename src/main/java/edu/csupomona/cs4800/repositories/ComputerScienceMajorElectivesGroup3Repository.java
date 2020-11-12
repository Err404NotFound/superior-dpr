package edu.csupomona.cs4800.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import edu.csupomona.cs4800.course.CSElectives3Course;
import edu.csupomona.cs4800.course.Course;

public interface ComputerScienceMajorElectivesGroup3Repository extends MongoRepository<CSElectives3Course, String> {

	List<Course> findByCompletionStatus(String status);
}
