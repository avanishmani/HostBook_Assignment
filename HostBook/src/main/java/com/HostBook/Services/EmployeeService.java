package com.HostBook.Services;

import java.util.List;

import com.HostBook.Entity.Employee;
import com.HostBook.Exception.EmployeeException;

public interface EmployeeService {

	public Employee addEmployee(Employee emp) throws EmployeeException;

	public Employee updateEmployeeDetails(Employee emp) throws EmployeeException;

	public List<Employee> deleteEmployeeAccount(Integer EmpID) throws EmployeeException;

	public Employee findEmployeeByEmployeeId(Integer EmployeeId) throws EmployeeException;

	public List<Employee> findAllEmployee() throws EmployeeException;

}
