package edu.csupomona.cs4800.user;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import edu.csupomona.cs4800.course.CSCoreCourse;
import edu.csupomona.cs4800.course.CSElectives1Course;
import edu.csupomona.cs4800.course.CSElectives2Course;
import edu.csupomona.cs4800.course.CSElectives3Course;
import edu.csupomona.cs4800.course.GEAreaACourse;
import edu.csupomona.cs4800.course.GEAreaBCourse;
import edu.csupomona.cs4800.course.GEAreaCCourse;
import edu.csupomona.cs4800.course.GEAreaDCourse;
import edu.csupomona.cs4800.course.GEAreaECourse;
import edu.csupomona.cs4800.role.Role;

@Document(collection="computersciencestudent")
public class User {

	@Id
	private String id;
	private String fullName, username, password;
	private boolean enabled;
	private List<CSCoreCourse> toDoCore, inProgressCore, completedCore;
	private List<CSElectives1Course> toDoElectives1, inProgressElectives1, completedElectives1;
	private List<CSElectives2Course> toDoElectives2, inProgressElectives2, completedElectives2;
	private List<CSElectives3Course> toDoElectives3, inProgressElectives3, completedElectives3;
	private List<GEAreaACourse> toDoAreaA, inProgressAreaA, completedAreaA;
	private List<GEAreaBCourse> toDoAreaB, inProgressAreaB, completedAreaB;
	private List<GEAreaCCourse> toDoAreaC, inProgressAreaC, completedAreaC;
	private List<GEAreaDCourse> toDoAreaD, inProgressAreaD, completedAreaD;
	private List<GEAreaECourse> toDoAreaE, inProgressAreaE, completedAreaE;
	@DBRef
	private Set<Role> roles = new HashSet<>();
	
	public User() {}
	
	public User(String user, String pass, String full, boolean enable, List<CSCoreCourse> todoCore, List<CSCoreCourse> inProgCore, List<CSCoreCourse> compCore) {
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
	
	public List<CSCoreCourse> getToDoCore() {
		return toDoCore;
	}
	
	public List<CSCoreCourse> getInProgressCore() {
		return inProgressCore;
	}
	
	public List<CSCoreCourse> getCompletedCore() {
		return completedCore;
	}
	
	public List<CSElectives1Course> getToDoElectives1() {
		return toDoElectives1;
	}
	
	public List<CSElectives1Course> getInProgressElectives1() {
		return inProgressElectives1;
	}
	
	public List<CSElectives1Course> getCompletedElectives1() {
		return completedElectives1;
	}
	
	public List<CSElectives2Course> getToDoElectives2() {
		return toDoElectives2;
	}
	
	public List<CSElectives2Course> getInProgressElectives2() {
		return inProgressElectives2;
	}
	
	public List<CSElectives2Course> getCompletedElectives2() {
		return completedElectives2;
	}
	
	public List<CSElectives3Course> getToDoElectives3() {
		return toDoElectives3;
	}
	
	public List<CSElectives3Course> getInProgressElectives3() {
		return inProgressElectives3;
	}
	
	public List<CSElectives3Course> getCompletedElectives3() {
		return completedElectives3;
	}
	
	public List<GEAreaACourse> getToDoAreaA() {
		return toDoAreaA;
	}
	
	public List<GEAreaACourse> getInProgressAreaA() {
		return inProgressAreaA;
	}
	
	public List<GEAreaACourse> getCompletedAreaA() {
		return completedAreaA;
	}
	
	public List<GEAreaBCourse> getToDoAreaB() {
		return toDoAreaB;
	}
	
	public List<GEAreaBCourse> getInProgressAreaB() {
		return inProgressAreaB;
	}
	
	public List<GEAreaBCourse> getCompletedAreaB() {
		return completedAreaB;
	}
	
	public List<GEAreaCCourse> getToDoAreaC() {
		return toDoAreaC;
	}
	
	public List<GEAreaCCourse> getInProgressAreaC() {
		return inProgressAreaC;
	}
	
	public List<GEAreaCCourse> getCompletedAreaC() {
		return completedAreaC;
	}
	
	public List<GEAreaDCourse> getToDoAreaD() {
		return toDoAreaD;
	}
	
	public List<GEAreaDCourse> getInProgressAreaD() {
		return inProgressAreaD;
	}
	
	public List<GEAreaDCourse> getCompletedAreaD() {
		return completedAreaD;
	}
	
	public List<GEAreaECourse> getToDoAreaE() {
		return toDoAreaE;
	}
	
	public List<GEAreaECourse> getInProgressAreaE() {
		return inProgressAreaE;
	}
	
	public List<GEAreaECourse> getCompletedAreaE() {
		return completedAreaE;
	}
	
	public Set<Role> getRoles() {
		return roles;
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

	public void setToDoAreaA(List<GEAreaACourse> toDoAreaA) {
		this.toDoAreaA = toDoAreaA;
	}

	public void setInProgressAreaA(List<GEAreaACourse> inProgressAreaA) {
		this.inProgressAreaA = inProgressAreaA;
	}

	public void setCompletedAreaA(List<GEAreaACourse> completedAreaA) {
		this.completedAreaA = completedAreaA;
	}

	public void setToDoAreaB(List<GEAreaBCourse> toDoAreaB) {
		this.toDoAreaB = toDoAreaB;
	}

	public void setInProgressAreaB(List<GEAreaBCourse> inProgressAreaB) {
		this.inProgressAreaB = inProgressAreaB;
	}

	public void setCompletedAreaB(List<GEAreaBCourse> completedAreaB) {
		this.completedAreaB = completedAreaB;
	}

	public void setToDoAreaC(List<GEAreaCCourse> toDoAreaC) {
		this.toDoAreaC = toDoAreaC;
	}

	public void setInProgressAreaC(List<GEAreaCCourse> inProgressAreaC) {
		this.inProgressAreaC = inProgressAreaC;
	}

	public void setCompletedAreaC(List<GEAreaCCourse> completedAreaC) {
		this.completedAreaC = completedAreaC;
	}

	public void setToDoAreaD(List<GEAreaDCourse> toDoAreaD) {
		this.toDoAreaD = toDoAreaD;
	}

	public void setInProgressAreaD(List<GEAreaDCourse> inProgressAreaD) {
		this.inProgressAreaD = inProgressAreaD;
	}

	public void setCompletedAreaD(List<GEAreaDCourse> completedAreaD) {
		this.completedAreaD = completedAreaD;
	}

	public void setToDoAreaE(List<GEAreaECourse> toDoAreaE) {
		this.toDoAreaE = toDoAreaE;
	}

	public void setInProgressAreaE(List<GEAreaECourse> inProgressAreaE) {
		this.inProgressAreaE = inProgressAreaE;
	}

	public void setCompletedAreaE(List<GEAreaECourse> completedAreaE) {
		this.completedAreaE = completedAreaE;
	}
	
	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}
}
