package edu.csupomona.cs4800.securingweb;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import edu.csupomona.cs4800.course.Course;
import edu.csupomona.cs4800.repositories.ComputerScienceMajorElectivesGroup1Repository;
import edu.csupomona.cs4800.repositories.ComputerScienceMajorElectivesGroup2Repository;
import edu.csupomona.cs4800.repositories.ComputerScienceMajorElectivesGroup3Repository;
import edu.csupomona.cs4800.repositories.ComputerScienceMajorRequiredCoreRepository;
import edu.csupomona.cs4800.repositories.ComputerScienceStudentRepository;
import edu.csupomona.cs4800.user.User;

@Service
public class CustomUserDetailsService implements UserDetailsService {

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
		List<Course> toDoCoreCourses = csCoreRepository.findByCompletionStatus(Course.TODO);
		user.setToDoCore(toDoCoreCourses);
		List<Course> toDoElectives1Courses = csElectives1Repository.findByCompletionStatus(Course.TODO);
		user.setToDoElectives1(toDoElectives1Courses);
		List<Course> toDoElectives2Courses = csElectives2Repository.findByCompletionStatus(Course.TODO);
		user.setToDoElectives2(toDoElectives2Courses);
		List<Course> toDoElectives3Courses = csElectives3Repository.findByCompletionStatus(Course.TODO);
		user.setToDoElectives3(toDoElectives3Courses);
		csStudentRepository.save(user);
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
