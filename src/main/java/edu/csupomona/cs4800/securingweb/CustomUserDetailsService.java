package edu.csupomona.cs4800.securingweb;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.mongodb.client.result.UpdateResult;

import edu.csupomona.cs4800.course.CSCoreCourse;
import edu.csupomona.cs4800.course.CSElectives1Course;
import edu.csupomona.cs4800.course.CSElectives2Course;
import edu.csupomona.cs4800.course.CSElectives3Course;
import edu.csupomona.cs4800.course.Course;
import edu.csupomona.cs4800.provider.ComputerScienceStudentRepositoryImpl;
import edu.csupomona.cs4800.repositories.ComputerScienceMajorElectivesGroup1Repository;
import edu.csupomona.cs4800.repositories.ComputerScienceMajorElectivesGroup2Repository;
import edu.csupomona.cs4800.repositories.ComputerScienceMajorElectivesGroup3Repository;
import edu.csupomona.cs4800.repositories.ComputerScienceMajorRequiredCoreRepository;
import edu.csupomona.cs4800.repositories.ComputerScienceStudentRepository;
import edu.csupomona.cs4800.user.User;

@Service
public class CustomUserDetailsService implements UserDetailsService {

	//@Autowired
	//MongoTemplate mongoTemplate;
	//private ComputerScienceStudentRepositoryImpl csStudentRepositoryImpl;
	@Autowired
	private ComputerScienceStudentRepository csStudentRepository;
	@Autowired
	private ComputerScienceMajorRequiredCoreRepository csCoreRepository;
	@Autowired
	private ComputerScienceMajorElectivesGroup1Repository csElectives1Repository;
	@Autowired
	private ComputerScienceMajorElectivesGroup2Repository csElectives2Repository;
	@Autowired
	private ComputerScienceMajorElectivesGroup3Repository csElectives3Repository;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	public User findUserByUsername(String username) {
		return csStudentRepository.findByUsername(username);
	}
	
	public void saveUser(User user) {
		user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
		user.setEnabled(true);
		List<CSCoreCourse> toDoCoreCourses = csCoreRepository.findByCompletionStatus(Course.TODO);
		user.setToDoCore(toDoCoreCourses);
		user.setInProgressCore(csCoreRepository.findByCompletionStatus(Course.INPROGRESS));
		user.setCompletedCore(csCoreRepository.findByCompletionStatus(Course.COMPLETED));
		List<CSElectives1Course> toDoElectives1Courses = csElectives1Repository.findByCompletionStatus(Course.TODO);
		user.setToDoElectives1(toDoElectives1Courses);
		user.setInProgressElectives1(csElectives1Repository.findByCompletionStatus(Course.INPROGRESS));
		user.setCompletedElectives1(csElectives1Repository.findByCompletionStatus(Course.COMPLETED));
		List<CSElectives2Course> toDoElectives2Courses = csElectives2Repository.findByCompletionStatus(Course.TODO);
		user.setToDoElectives2(toDoElectives2Courses);
		user.setInProgressElectives2(csElectives2Repository.findByCompletionStatus(Course.INPROGRESS));
		user.setCompletedElectives2(csElectives2Repository.findByCompletionStatus(Course.COMPLETED));
		List<CSElectives3Course> toDoElectives3Courses = csElectives3Repository.findByCompletionStatus(Course.TODO);
		user.setToDoElectives3(toDoElectives3Courses);
		user.setInProgressElectives3(csElectives3Repository.findByCompletionStatus(Course.INPROGRESS));
		user.setCompletedElectives3(csElectives3Repository.findByCompletionStatus(Course.COMPLETED));
		csStudentRepository.save(user);
	}
	
	public void updateUser(User user) {
		Optional<CSCoreCourse> optional = csCoreRepository.findById("5f6cd6533cab4d677974fa57");
		optional.ifPresent(course -> {
			List<CSCoreCourse> todo = user.getToDoCore();
			todo.removeIf(c -> (c.getId().equals(course.getId())));
			course.setCompletionStatus(Course.COMPLETED);
			List<CSCoreCourse> completed = user.getCompletedCore();
			completed.add(course);
			user.setCompletedCore(completed);
			csStudentRepository.save(user);
		});
	}
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = csStudentRepository.findByUsername(username);
		if(user != null) {
			return buildUserForAuthentication(user);
		}
		else {
			throw new UsernameNotFoundException("username not found");
		}
	}
	
	//Adds a User role with simple authorities
	private UserDetails buildUserForAuthentication(User user) {
		List<GrantedAuthority> authorities = new ArrayList<>();
		authorities.add(new SimpleGrantedAuthority("USER"));
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), authorities);
	}
}
