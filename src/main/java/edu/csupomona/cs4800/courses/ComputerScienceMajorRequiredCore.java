package edu.csupomona.cs4800.courses;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="majorrequiredcorecourses")
public class ComputerScienceMajorRequiredCore {

	@Id
	private String id;
	private String course_number, course_name, completion_status, prereq_course_number, coreq_course_number, ge_area;
	private int units;
	
	public static final String TODO = "TO DO";
	public static final String INPROGRESS = "IN PROGRESS";
	public static final String COMPLETED = "COMPLETED";
	
	public ComputerScienceMajorRequiredCore() {}
	
	public ComputerScienceMajorRequiredCore(String cNum, String cName, int u, String comp, String pre, String co, String ge) {
		course_number = cNum;
		course_name = cName;
		units = u;
		completion_status = comp;
		prereq_course_number = pre;
		coreq_course_number = co;
		ge_area = ge;
	}
	
	@Override
	public String toString() {
		return String.format("CS Required Core[id=%s, Course Number=%s, Course Name=%s, Units=%f, Completion Status=%s, "
				+ "Prereq Courses=%s, Coreq Courses=%s, GE Area=%s]",
				id, course_number, course_name, units, completion_status, prereq_course_number, coreq_course_number, ge_area);
	}
	
	
	//Getter Methods
	public String getCourseNumber() {
		return course_number;
	}
	
	public String getCourseName() {
		return course_name;
	}
	
	//Setter Methods
	public void setCourseNumber(String cNum) {
		course_number = cNum;
	}
	
	public void setCompletionStatus(String updatedStatus) {
		switch(updatedStatus) {
			case TODO:
				completion_status = TODO;
				break;
			case INPROGRESS:
				completion_status = INPROGRESS;
				break;
			case COMPLETED:
				completion_status = COMPLETED;
				break;
			default:
				return;
		}
		
	}
}
