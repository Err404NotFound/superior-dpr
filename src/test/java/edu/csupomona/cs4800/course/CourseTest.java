package edu.csupomona.cs4800.course;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

public class CourseTest {

	//Fields
	private String courseNumber = "CS 101";
	private String courseName = "Intro to Computer Science";
	private int units = 3;
	private String completionStatus = Course.TODO;
	private String prereqCourseNumber = "CS 100";
	private String coreqCourseNumber = "CS 101L";
	private String geArea = "E";

	@Autowired
	private Course c = new Course(courseNumber, courseName, units, completionStatus, prereqCourseNumber, coreqCourseNumber, geArea);

	@Before
	public void setup() {
		System.out.println("Setting up test ...");
	}
	
	@After
	public void cleanup() {
		System.out.println("Finishing and cleaning up test ...");
	}
	
	//Test cases
	@Test
	public void testSetCompletionStatusInProgress() {
		//Change status to IN PROGRESS
		//Act
		c.setCompletionStatus(Course.INPROGRESS);
		//Assert
		Assert.assertEquals(c.getCompletionStatus(), Course.INPROGRESS);
	}
	
	@Test
	public void testSetCompletionStatusCompleted() {
		//Change status to COMPLETED
		//Act
		c.setCompletionStatus(Course.COMPLETED);
		//Assert
		Assert.assertEquals(c.getCompletionStatus(), Course.COMPLETED);

		//Change status to TO DO
		//Act
		c.setCompletionStatus(Course.TODO);
		//Assert
		Assert.assertEquals(c.getCompletionStatus(), Course.TODO);
	}
	
	@Test
	public void testSetCompletionStatusToDo() {
		//Change status to TO DO
		//Act
		c.setCompletionStatus(Course.TODO);
		//Assert
		Assert.assertEquals(c.getCompletionStatus(), Course.TODO);
	}

  @Test
  public void testSetCourseNumber() {
    //Change course number to CS 1001
    c.setCourseNumber("CS 1001");
    //Assert
    Assert.assertEquals(c.getCourseNumber(), "CS 1001");
  }
}
