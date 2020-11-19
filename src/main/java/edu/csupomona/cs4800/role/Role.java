package edu.csupomona.cs4800.role;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="roles")
public class Role {

	@Id
	private String id;
	
	private String role;
	
	public static final String USER = "USER";
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String name) {
		this.role = name;
	}
}
