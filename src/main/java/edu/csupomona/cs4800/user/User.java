package edu.csupomona.cs4800.user;

import java.util.List;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import edu.csupomona.cs4800.course.Course;

@Document(collection="computersciencestudent")
public class User {

	@Id
	private String id;
	private String fullName, username, password;
	private boolean enabled;
	@DBRef
	private List<Course> toDoCore, inProgressCore, completedCore, toDoElectives1, inProgressElectives1, completedElectives1,
		toDoElectives2, inProgressElectives2, completedElectives2, toDoElectives3, inProgressElectives3, completedElectives3;
	
	public User() {}
	
	public User(String user, String pass, String full, boolean enable, List<Course> todoCore, List<Course> inProgCore, List<Course> compCore) {
		username = user;
		password = pass;
		fullName = full;
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
	
	public String getFullName() {
		return fullName;
	}
	
	public boolean isEnabled() {
		return enabled;
	}
	
	public List<Course> getToDoCore() {
		return toDoCore;
	}
	
	public List<Course> getInProgressCore() {
		return inProgressCore;
	}
	
	public List<Course> getCompletedCore() {
		return completedCore;
	}
	
	//Setter Methods
	public void setId(String id) {
		this.id = id;
	}
	
	public void setFullName(String full) {
		fullName = full;
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
	
	public void setToDoCore(List<Course> todo) {
		toDoCore = todo;
	}
	
	public void setInProgressCore(List<Course> inProg) {
		inProgressCore = inProg;
	}
	
	public void setCompletedCore(List<Course> comp) {
		completedCore = comp;
	}
	
	public void setToDoElectives1(List<Course> todo) {
		toDoElectives1 = todo;
	}
	
	public void setInProgressElectives1(List<Course> inProg) {
		inProgressElectives1 = inProg;
	}
	
	public void setCompletedElectives1(List<Course> comp) {
		completedElectives1 = comp;
	}
	
	public void setToDoElectives2(List<Course> todo) {
		toDoElectives2 = todo;
	}
	
	public void setInProgressElectives2(List<Course> inProg) {
		inProgressElectives2 = inProg;
	}
	
	public void setCompletedElectives2(List<Course> comp) {
		completedElectives2 = comp;
	}
	
	public void setToDoElectives3(List<Course> todo) {
		toDoElectives3 = todo;
	}
	
	public void setInProgressElectives3(List<Course> inProg) {
		inProgressElectives3 = inProg;
	}
	
	public void setCompletedElectives3(List<Course> comp) {
		completedElectives3 = comp;
	}
}
