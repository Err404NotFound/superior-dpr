package edu.csupomona.cs4800.securingweb;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import edu.csupomona.cs4800.course.CSCoreCourse;
import edu.csupomona.cs4800.course.CSElectives1Course;
import edu.csupomona.cs4800.course.CSElectives2Course;
import edu.csupomona.cs4800.course.CSElectives3Course;
import edu.csupomona.cs4800.course.Course;
import edu.csupomona.cs4800.repositories.ComputerScienceMajorElectivesGroup1Repository;
import edu.csupomona.cs4800.repositories.ComputerScienceMajorElectivesGroup2Repository;
import edu.csupomona.cs4800.repositories.ComputerScienceMajorElectivesGroup3Repository;
import edu.csupomona.cs4800.repositories.ComputerScienceMajorRequiredCoreRepository;
import edu.csupomona.cs4800.repositories.ComputerScienceStudentRepository;
import edu.csupomona.cs4800.repositories.GEAreaARepository;
import edu.csupomona.cs4800.repositories.GEAreaBRepository;
import edu.csupomona.cs4800.repositories.GEAreaCRepository;
import edu.csupomona.cs4800.repositories.GEAreaDRepository;
import edu.csupomona.cs4800.repositories.GEAreaERepository;
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
	private GEAreaARepository geAreaARepository;
	@Autowired
	private GEAreaBRepository geAreaBRepository;
	@Autowired
	private GEAreaCRepository geAreaCRepository;
	@Autowired
	private GEAreaDRepository geAreaDRepository;
	@Autowired
	private GEAreaERepository geAreaERepository;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	public User findUserByUsername(String username) {
		return csStudentRepository.findByUsername(username);
	}

	//Initializes a user
	public void saveUser(User user) {
		user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
		user.setEnabled(true);
		//Set core courses
		user.setToDoCore(csCoreRepository.findByCompletionStatus(Course.TODO));
		user.setInProgressCore(csCoreRepository.findByCompletionStatus(Course.INPROGRESS));
		user.setCompletedCore(csCoreRepository.findByCompletionStatus(Course.COMPLETED));
		//Set electives 1 courses
		user.setToDoElectives1(csElectives1Repository.findByCompletionStatus(Course.TODO));
		user.setInProgressElectives1(csElectives1Repository.findByCompletionStatus(Course.INPROGRESS));
		user.setCompletedElectives1(csElectives1Repository.findByCompletionStatus(Course.COMPLETED));
		//Set electives 2 courses
		user.setToDoElectives2(csElectives2Repository.findByCompletionStatus(Course.TODO));
		user.setInProgressElectives2(csElectives2Repository.findByCompletionStatus(Course.INPROGRESS));
		user.setCompletedElectives2(csElectives2Repository.findByCompletionStatus(Course.COMPLETED));
		//Set electives 3 courses
		user.setToDoElectives3(csElectives3Repository.findByCompletionStatus(Course.TODO));
		user.setInProgressElectives3(csElectives3Repository.findByCompletionStatus(Course.INPROGRESS));
		user.setCompletedElectives3(csElectives3Repository.findByCompletionStatus(Course.COMPLETED));
		//Set ge area a courses
		user.setToDoAreaA(geAreaARepository.findByCompletionStatus(Course.TODO));
		user.setInProgressAreaA(geAreaARepository.findByCompletionStatus(Course.INPROGRESS));
		user.setCompletedAreaA(geAreaARepository.findByCompletionStatus(Course.COMPLETED));
		//Set ge area b courses
		user.setToDoAreaB(geAreaBRepository.findByCompletionStatus(Course.TODO));
		user.setInProgressAreaB(geAreaBRepository.findByCompletionStatus(Course.INPROGRESS));
		user.setCompletedAreaB(geAreaBRepository.findByCompletionStatus(Course.COMPLETED));
		//Set ge area c courses
		user.setToDoAreaC(geAreaCRepository.findByCompletionStatus(Course.TODO));
		user.setInProgressAreaC(geAreaCRepository.findByCompletionStatus(Course.INPROGRESS));
		user.setCompletedAreaC(geAreaCRepository.findByCompletionStatus(Course.COMPLETED));
		//Set ge area d courses
		user.setToDoAreaD(geAreaDRepository.findByCompletionStatus(Course.TODO));
		user.setInProgressAreaD(geAreaDRepository.findByCompletionStatus(Course.INPROGRESS));
		user.setCompletedAreaD(geAreaDRepository.findByCompletionStatus(Course.COMPLETED));
		//Set ge area e courses
		user.setToDoAreaE(geAreaERepository.findByCompletionStatus(Course.TODO));
		user.setInProgressAreaE(geAreaERepository.findByCompletionStatus(Course.INPROGRESS));
		user.setCompletedAreaE(geAreaERepository.findByCompletionStatus(Course.COMPLETED));
		
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

	public void updateUserCoreList(User user, List<CSCoreCourse> checkedCore) {
		List<CSCoreCourse> todo = user.getToDoCore();
		List<CSCoreCourse> completed = user.getCompletedCore();
		List<CSCoreCourse> newComplete = new ArrayList<CSCoreCourse>();
		for(CSCoreCourse core : checkedCore) {
			//Make sure the course exists
			Optional<CSCoreCourse> optional = csCoreRepository.findById(core.getId());
			//If it does exist, remove it from todo (if it's there), set the completion status, and add it to the new completed list
			optional.ifPresent(course -> {
				todo.removeIf(c -> (c.getId().equals(course.getId())));
				course.setCompletionStatus(Course.COMPLETED);
				newComplete.add(course);
			});
		}
		//Find the difference between the completed lists to determine if a box was unchecked
		for(CSCoreCourse core : newComplete) {
			completed.removeIf(c -> (c.getId().equals(core.getId())));
		}
		for(CSCoreCourse core : completed) {
			core.setCompletionStatus(Course.TODO);
			todo.add(core);
		}
		//Update and save user
		user.setToDoCore(todo);
		user.setCompletedCore(newComplete);
		csStudentRepository.save(user);
	}
	
	public void updateUserElectives1List(User user, List<CSElectives1Course> checkedElectives) {
		List<CSElectives1Course> todo = user.getToDoElectives1();
		List<CSElectives1Course> completed = user.getCompletedElectives1();
		List<CSElectives1Course> newComplete = new ArrayList<CSElectives1Course>();
		for(CSElectives1Course elective : checkedElectives) {
			//Make sure the course exists
			Optional<CSElectives1Course> optional = csElectives1Repository.findById(elective.getId());
			//If it does exist, remove it from todo (if it's there), set the completion status, and add it to the new completed list
			optional.ifPresent(course -> {
				todo.removeIf(c -> (c.getId().equals(course.getId())));
				course.setCompletionStatus(Course.COMPLETED);
				newComplete.add(course);
			});
		}
		//Find the difference between the completed lists to determine if a box was unchecked
		for(CSElectives1Course elective : newComplete) {
			completed.removeIf(c -> (c.getId().equals(elective.getId())));
		}
		for(CSElectives1Course elective : completed) {
			elective.setCompletionStatus(Course.TODO);
			todo.add(elective);
		}
		//Update and save user
		user.setToDoElectives1(todo);
		user.setCompletedElectives1(newComplete);
		csStudentRepository.save(user);
	}
	
	public void updateUserElectives2List(User user, List<CSElectives2Course> checkedElectives) {
		List<CSElectives2Course> todo = user.getToDoElectives2();
		List<CSElectives2Course> completed = user.getCompletedElectives2();
		List<CSElectives2Course> newComplete = new ArrayList<CSElectives2Course>();
		for(CSElectives2Course elective : checkedElectives) {
			//Make sure the course exists
			Optional<CSElectives2Course> optional = csElectives2Repository.findById(elective.getId());
			//If it does exist, remove it from todo (if it's there), set the completion status, and add it to the new completed list
			optional.ifPresent(course -> {
				todo.removeIf(c -> (c.getId().equals(course.getId())));
				course.setCompletionStatus(Course.COMPLETED);
				newComplete.add(course);
			});
		}
		//Find the difference between the completed lists to determine if a box was unchecked
		for(CSElectives2Course elective : newComplete) {
			completed.removeIf(c -> (c.getId().equals(elective.getId())));
		}
		for(CSElectives2Course elective : completed) {
			elective.setCompletionStatus(Course.TODO);
			todo.add(elective);
		}
		//Update and save user
		user.setToDoElectives2(todo);
		user.setCompletedElectives2(newComplete);
		csStudentRepository.save(user);
	}
	
	public void updateUserElectives3List(User user, List<CSElectives3Course> checkedElectives) {
		List<CSElectives3Course> todo = user.getToDoElectives3();
		List<CSElectives3Course> completed = user.getCompletedElectives3();
		List<CSElectives3Course> newComplete = new ArrayList<CSElectives3Course>();
		for(CSElectives3Course elective : checkedElectives) {
			//Make sure the course exists
			Optional<CSElectives3Course> optional = csElectives3Repository.findById(elective.getId());
			//If it does exist, remove it from todo (if it's there), set the completion status, and add it to the new completed list
			optional.ifPresent(course -> {
				todo.removeIf(c -> (c.getId().equals(course.getId())));
				course.setCompletionStatus(Course.COMPLETED);
				newComplete.add(course);
			});
		}
		//Find the difference between the completed lists to determine if a box was unchecked
		for(CSElectives3Course elective : newComplete) {
			completed.removeIf(c -> (c.getId().equals(elective.getId())));
		}
		for(CSElectives3Course elective : completed) {
			elective.setCompletionStatus(Course.TODO);
			todo.add(elective);
		}
		//Update and save user
		user.setToDoElectives3(todo);
		user.setCompletedElectives3(newComplete);
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
