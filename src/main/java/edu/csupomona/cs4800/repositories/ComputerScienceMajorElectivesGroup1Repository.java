package edu.csupomona.cs4800.repositories;

import java.util.List;
import java.util.Set;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import edu.csupomona.cs4800.course.Course;

public interface ComputerScienceMajorElectivesGroup1Repository extends MongoRepository<Course, String> {

	List<Course> findByCompletionStatus(String status);
}
