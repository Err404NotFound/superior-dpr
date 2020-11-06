package edu.csupomona.cs4800.repositories;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import edu.csupomona.cs4800.course.Course;

public interface GeneralEducationAreaBRepository extends MongoRepository <Course, String>{
	List<Course> findByCourseNameContaining(String title);
	List<Course> findByCompletionStatus(String completionStatus);
}

