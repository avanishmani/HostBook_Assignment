package com.HostBook.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Data;


@Entity
@Data
@AllArgsConstructor

public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer Employee_ID;

	private String Employee_FirstName;
	private String Employee_LastName;
	@Email(message = "Please Enter the Valid Email Id !")
	private String Employee_Email;

}