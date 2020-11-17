package edu.csupomona.cs4800.user;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import edu.csupomona.cs4800.course.CSCoreCourse;
import edu.csupomona.cs4800.course.CSElectives1Course;
import edu.csupomona.cs4800.course.CSElectives2Course;
import edu.csupomona.cs4800.course.CSElectives3Course;

@Document(collection="computersciencestudent")
public class User {

	@Id
	private String id;
	private String firstName, lastName, fullName, username, password;
	private boolean enabled;
	//@DBRef
	private List<CSCoreCourse> toDoCore, inProgressCore, completedCore;
	private List<CSElectives1Course> toDoElectives1, inProgressElectives1, completedElectives1;
	private List<CSElectives2Course> toDoElectives2, inProgressElectives2, completedElectives2;
	private List<CSElectives3Course> toDoElectives3, inProgressElectives3, completedElectives3;
	
	public User() {}
	
	public User(String user, String pass, String first, String last, boolean enable, List<CSCoreCourse> todoCore, List<CSCoreCourse> inProgCore, List<CSCoreCourse> compCore) {
		username = user;
		password = pass;
		firstName = first;
		lastName = last;
		fullName = first + " " + last;
		enabled = enable;
		toDoCore = todoCore;
		inProgressCore = inProgCore;
		completedCore = compCore;
	}
	
	@Override
	public String toString() {
		return String.format("CS Student[id=%s, Full Name = %s, Username = %s]", id, fullName, username);
	}
	
	//Getter Methods
	public String getId() {
		return id;
	}
	
	public String getUsername() {
		return username;
	}
	
	public String getPassword() {
		return password;
	}
	
	public String getFirstName() {
		return firstName;
	}
	
	public String getLastName() {
		return lastName;
	}
	
	public String getFullName() {
		return fullName;
	}
	
	public boolean isEnabled() {
		return enabled;
	}
	
	public List<CSCoreCourse> getToDoCore() {
		return toDoCore;
	}
	
	public List<CSCoreCourse> getInProgressCore() {
		return inProgressCore;
	}
	
	public List<CSCoreCourse> getCompletedCore() {
		return completedCore;
	}
	
	//Setter Methods
	public void setId(String id) {
		this.id = id;
	}
	
	public void setFistName(String first) {
		firstName = first;
		fullName = firstName + " " + lastName;
	}
	
	public void setLastName(String last) {
		lastName = last;
		fullName = firstName + " " + lastName;
	}
	
	public void setUsername(String user) {
		username = user;
	}
	
	public void setPassword(String pass) {
		password = pass;
	}
	
	public void setEnabled(boolean enable) {
		enabled = enable;
	}
	
	public void setToDoCore(List<CSCoreCourse> todo) {
		toDoCore = todo;
	}
	
	public void setInProgressCore(List<CSCoreCourse> inProg) {
		inProgressCore = inProg;
	}
	
	public void setCompletedCore(List<CSCoreCourse> comp) {
		completedCore = comp;
	}
	
	public void setToDoElectives1(List<CSElectives1Course> todo) {
		toDoElectives1 = todo;
	}
	
	public void setInProgressElectives1(List<CSElectives1Course> inProg) {
		inProgressElectives1 = inProg;
	}
	
	public void setCompletedElectives1(List<CSElectives1Course> comp) {
		completedElectives1 = comp;
	}
	
	public void setToDoElectives2(List<CSElectives2Course> todo) {
		toDoElectives2 = todo;
	}
	
	public void setInProgressElectives2(List<CSElectives2Course> inProg) {
		inProgressElectives2 = inProg;
	}
	
	public void setCompletedElectives2(List<CSElectives2Course> comp) {
		completedElectives2 = comp;
	}
	
	public void setToDoElectives3(List<CSElectives3Course> todo) {
		toDoElectives3 = todo;
	}
	
	public void setInProgressElectives3(List<CSElectives3Course> inProg) {
		inProgressElectives3 = inProg;
	}
	
	public void setCompletedElectives3(List<CSElectives3Course> comp) {
		completedElectives3 = comp;
	}
}
