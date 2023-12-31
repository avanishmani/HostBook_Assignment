package com.HostBook.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.HostBook.Entity.Employee;
import com.HostBook.Exception.EmployeeException;
import com.HostBook.Repository.EmployeeRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
	@Autowired
	public EmployeeRepo empr;

	@Override
	public Employee addEmployee(Employee emp) throws EmployeeException {
		Employee em = empr.save(emp);
		
		if (em != null)
			return em;
		else
			throw new EmployeeException("Not Able To save Data Of Employee Try Again !");
	}

	@Override
	public Employee updateEmployeeDetails(Employee emp,Integer id) throws EmployeeException {
		  Optional<Employee> em = empr.findById(id);
		    if (em.isEmpty()) {
		        throw new EmployeeException("No Such Employee is there in Our Database !");
		    } else {
		        Employee existingEmployee = em.get();
		        // Update the properties of the existing employee
		        existingEmployee.setEmployee_Firstname(emp.getEmployee_Firstname());
		        existingEmployee.setEmployee_Lastname(emp.getEmployee_Lastname());
		        existingEmployee.setEmployee_Email(emp.getEmployee_Email());
		        return empr.save(existingEmployee);
		    }

	}

	@Override
	public List<Employee> deleteEmployeeAccount(Integer EmpID) throws EmployeeException {
		Optional<Employee> em = empr.findById(EmpID);
		if (em.isEmpty())
			throw new EmployeeException("No Such Employe is there in Our Database !");
		else {
			empr.delete(em.get());

			List<Employee> emplist = empr.findAll();
			if (emplist.size() != 0)
				return emplist;
			else
				throw new EmployeeException(
						"After Deleting Employee Details there is no Employee Avilable inside the Database !");
		}
	}

	@Override
	public Employee findEmployeeByEmployeeId(Integer EmployeeId) throws EmployeeException {
		Optional<Employee> em = empr.findById(EmployeeId);
		if (em.isEmpty())
			throw new EmployeeException("No Such Employe is there in Our Database !");
		else {

			return em.get();
		}
	}

	@Override
	public List<Employee> findAllEmployee() throws EmployeeException {
		List<Employee> emplist = empr.findAll();
		
		for(Employee e:emplist) {
			System.out.println(e);
		}
		if (emplist.size() != 0)
			return emplist;
		else
			throw new EmployeeException("Employee Data Base is Empty Please Enter the Employee Data First !");
	}

}
