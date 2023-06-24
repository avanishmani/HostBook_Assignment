package com.HostBook.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@CrossOrigin
public class EmployeeController {
	@Autowired
	public EmployeeService employeeService;
	
	@PostMapping("/employee")
	public ResponseEntity<Employee> addEmployee(@Valid @RequestBody Employee emp) throws EmployeeException{
		System.out.println("data recieved by the user for before Addition :->"+emp.toString());
		
		Employee savedEmployee = employeeService.addEmployee(emp);
		System.out.println("data recieved by the user for After Addition :->"+savedEmployee.toString());
		return new ResponseEntity<Employee>(savedEmployee, HttpStatus.CREATED);
	}

	@PutMapping("/employee/{id}")
	public ResponseEntity<Employee> updateEmployeeDetails(@Valid @RequestBody Employee emp,@PathVariable("id")Integer EmpID) throws EmployeeException{
		System.out.println("data recieved by the user for before update :->"+emp.toString());
		Employee updatedEmployee = employeeService.updateEmployeeDetails(emp,EmpID);
		System.out.println("data recieved by the user for after update :->"+updatedEmployee.toString());
		return new ResponseEntity<Employee>(updatedEmployee, HttpStatus.OK);
	}
	
	@DeleteMapping("/employee/{id}")
	public ResponseEntity< List<Employee>> deleteEmployeeAccount(@PathVariable("id")Integer EmpID) throws EmployeeException{
		List<Employee> RemainingEmployee = employeeService.deleteEmployeeAccount(EmpID);

		return new ResponseEntity<List<Employee>>(RemainingEmployee, HttpStatus.NO_CONTENT);
	}

	@GetMapping("/employee/{id}")
	public ResponseEntity<Employee> findEmployeeByEmployeeId(@PathVariable("id") Integer EmployeeId) throws EmployeeException{
		Employee employee = employeeService.findEmployeeByEmployeeId(EmployeeId);

		return new ResponseEntity<Employee>(employee, HttpStatus.OK);
	}

	@GetMapping("/employee")
	public ResponseEntity< List<Employee>> findAllEmployee() throws EmployeeException{
		List<Employee> allEmployee = employeeService.findAllEmployee();

		return new ResponseEntity<List<Employee>>(allEmployee, HttpStatus.OK);
	}
}
