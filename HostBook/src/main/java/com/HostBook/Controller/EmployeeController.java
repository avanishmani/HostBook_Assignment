package com.HostBook.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.HostBook.Entity.Employee;
import com.HostBook.Exception.EmployeeException;
import com.HostBook.Services.EmployeeService;

import org.springframework.web.bind.annotation.RequestBody;
import jakarta.validation.Valid;

@RestController
public class EmployeeController {
	@Autowired
	public EmployeeService employeeService;
	
	@PostMapping("/emp")
	public ResponseEntity<Employee> addEmployee(@Valid @RequestBody Employee emp) throws EmployeeException{
		
		
		Employee savedEmployee = employeeService.addEmployee(emp);

		return new ResponseEntity<Employee>(savedEmployee, HttpStatus.CREATED);
	}

	@PutMapping("/emp")
	public ResponseEntity<Employee> updateEmployeeDetails(@Valid @RequestBody Employee emp) throws EmployeeException{
		Employee updatedEmployee = employeeService.updateEmployeeDetails(emp);

		return new ResponseEntity<Employee>(updatedEmployee, HttpStatus.OK);
	}
	
	@DeleteMapping("/emp/{EmpID}")
	public ResponseEntity< List<Employee>> deleteEmployeeAccount(@PathVariable("EmpID")Integer EmpID) throws EmployeeException{
		List<Employee> RemainingEmployee = employeeService.deleteEmployeeAccount(EmpID);

		return new ResponseEntity<List<Employee>>(RemainingEmployee, HttpStatus.NO_CONTENT);
	}

	@GetMapping("/emp/{EmpId}")
	public ResponseEntity<Employee> findEmployeeByEmployeeId(@PathVariable("EmpID") Integer EmployeeId) throws EmployeeException{
		Employee employee = employeeService.findEmployeeByEmployeeId(EmployeeId);

		return new ResponseEntity<Employee>(employee, HttpStatus.OK);
	}

	@GetMapping("/emp")
	public ResponseEntity< List<Employee>> findAllEmployee() throws EmployeeException{
		List<Employee> allEmployee = employeeService.findAllEmployee();

		return new ResponseEntity<List<Employee>>(allEmployee, HttpStatus.OK);
	}
}
