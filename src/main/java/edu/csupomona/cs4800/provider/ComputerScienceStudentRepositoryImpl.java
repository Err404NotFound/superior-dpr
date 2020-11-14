package edu.csupomona.cs4800.provider;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.util.Assert;

import com.mongodb.client.result.UpdateResult;

import edu.csupomona.cs4800.course.Course;
import edu.csupomona.cs4800.repositories.CustomUserRepository;
import edu.csupomona.cs4800.user.User;

public class ComputerScienceStudentRepositoryImpl implements CustomUserRepository {

	private final MongoOperations operations;
	
	@Autowired
	public ComputerScienceStudentRepositoryImpl(MongoOperations op) {
		Assert.notNull(op, "MongoOperations must not be null!");
	    this.operations = op;	
	}
	
	@Override
	public User findByUsername(String username) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public UpdateResult updateCourseToCompleted(User user, String id) {
		Query findQuery = Query.query(Criteria.where("id").is(user.getId()).and("toDoCore.id").is(id));
		Update update = new Update().set("toDoCore.$.completionStatus", Course.COMPLETED);
		UpdateResult ur = operations.updateMulti(findQuery, update, Collection.class);
		return ur;
	}
}
