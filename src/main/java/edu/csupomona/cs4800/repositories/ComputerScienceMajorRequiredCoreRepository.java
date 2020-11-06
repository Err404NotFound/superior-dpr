package edu.csupomona.cs4800.repositories;

import java.util.List;
import java.util.Set;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import edu.csupomona.cs4800.course.Course;

@Repository(value="majorrequiredcorecourses")
public interface ComputerScienceMajorRequiredCoreRepository extends MongoRepository<Course, String> {

	List<Course> findByCompletionStatus(String status);
}
