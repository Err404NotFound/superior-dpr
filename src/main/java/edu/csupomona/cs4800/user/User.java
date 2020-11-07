package edu.csupomona.cs4800.user;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import edu.csupomona.cs4800.course.Course;

@Document(collection="computersciencestudent")
public class User {

	@Id
	private String id;
	private String firstName, lastName;
	private Course[] toDo, inProgress, completed;
	
	public User() {}
	
	public User(String first, String last, Course[] todo, Course[] inProg, Course[] comp) {
		firstName = first;
		lastName = last;
		toDo = todo.clone();
		inProgress = inProg.clone();
		completed = comp.clone();
	}
	
	@Override
	public String toString() {
		return String.format("CS Student[id=%s, Full Name= %s %s]", id, firstName, lastName);
	}
	
	//Getter Methods
	public String getFirstName() {
		return firstName;
	}
	
	public String getLastName() {
		return lastName;
	}
	
	public Course[] getToDo() {
		return toDo;
	}
	
	public Course[] getInProgress() {
		return inProgress;
	}
	
	public Course[] getCompleted() {
		return completed;
	}
	
	//Setter Methods
	public void setFirstName(String first) {
		firstName = first;
	}
	
	public void setLastName(String last) {
		lastName = last;
	}
}
