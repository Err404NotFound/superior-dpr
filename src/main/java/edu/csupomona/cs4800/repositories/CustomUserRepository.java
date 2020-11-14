package edu.csupomona.cs4800.repositories;

import java.util.List;

import com.mongodb.client.result.UpdateResult;

import edu.csupomona.cs4800.course.Course;
import edu.csupomona.cs4800.user.User;

public interface CustomUserRepository {
	User findByUsername(String username);
	
	UpdateResult updateCourseToCompleted(User user, String id);
}
