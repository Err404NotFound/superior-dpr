package edu.csupomona.cs4800.course;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

//@Document (collection="majorrequiredcorecourses")
@Data
public class Course {

	@Id
	private String id;
	private String course_number, course_name, completionStatus, prereq_course_number, coreq_course_number, ge_area;
	private int units;
	
	public static final String TODO = "TO DO";
	public static final String INPROGRESS = "IN PROGRESS";
	public static final String COMPLETED = "COMPLETED";
	
	@PersistenceConstructor
	public Course() {}
	
	public Course(String cNum, String cName, int u, String comp, String pre, String co, String ge) {
		course_number = cNum;
		course_name = cName;
		units = u;
		completionStatus = comp;
		prereq_course_number = pre;
		coreq_course_number = co;
		ge_area = ge;
	}
	
	@Override
	public String toString() {
		return String.format("CS Required Core[id=%s, Course Number=%s, Course Name=%s, Units=%d, Completion Status=%s, "
				+ "Prereq Courses=%s, Coreq Courses=%s, GE Area=%s]",
				id, course_number, course_name, units, completionStatus, prereq_course_number, coreq_course_number, ge_area);
	}
	
	
	//Getter Methods
	public String getCourseNumber() {
		return course_number;
	}
	
	public String getCourseName() {
		return course_name;
	}
	
	public String getCompletionStatus() {
		return completionStatus;
	}
	
	//Setter Methods
	public void setCourseNumber(String cNum) {
		course_number = cNum;
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
