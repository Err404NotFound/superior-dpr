package edu.csupomona.cs4800.course;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
public class Course {

	@Id
	private String id;
	private String courseNumber, courseName, completionStatus, prereqCourseNumber, coreqCourseNumber, geArea;
	private int units;
	
	public static final String TODO = "TO DO";
	public static final String INPROGRESS = "IN PROGRESS";
	public static final String COMPLETED = "COMPLETED";
	
	@PersistenceConstructor
	public Course() {}
	
	public Course(String cNum, String cName, int u, String comp, String pre, String co, String ge) {
		courseNumber = cNum;
		courseName = cName;
		units = u;
		completionStatus = comp;
		prereqCourseNumber = pre;
		coreqCourseNumber = co;
		geArea = ge;
	}
	
	@Override
	public String toString() {
		return String.format("CS Required Core[id=%s, Course Number=%s, Course Name=%s, Units=%d, Completion Status=%s, "
				+ "Prereq Courses=%s, Coreq Courses=%s, GE Area=%s]",
				id, courseNumber, courseName, units, completionStatus, prereqCourseNumber, coreqCourseNumber, geArea);
	}
	
	
	//Getter Methods
	public String getCourseNumber() {
		return courseNumber;
	}
	
	public String getCourseName() {
		return courseName;
	}
	
	public String getCompletionStatus() {
		return completionStatus;
	}
	
	//Setter Methods
	public void setCourseNumber(String cNum) {
		courseNumber = cNum;
	}
	
	public void setCompletionStatus(String updatedStatus) {
		switch(updatedStatus) {
			case TODO:
				completionStatus = TODO;
				break;
			case INPROGRESS:
				completionStatus = INPROGRESS;
				break;
			case COMPLETED:
				completionStatus = COMPLETED;
				break;
			default:
				return;
		}
		
	}
}
