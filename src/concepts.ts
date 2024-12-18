// 1. Interface for defining the structure of an Employee
interface Employee {
    id: number;
    name: string;
    department: string;
    getSalary: () => number;
  }
  
  // 2. Class implementing the Employee interface with Access Modifiers and Generics
  export class FullTimeEmployee implements Employee {
    // Public properties can be accessed outside the class
    public id: number;
    public name: string;
    public department: string;
    
    // Private property, cannot be accessed outside the class
    private salary: number;
  
    // Constructor with Type Annotations
    constructor(id: number, name: string, department: string, salary: number) {
      this.id = id;
      this.name = name;
      this.department = department;
      this.salary = salary;
    }
  
    // Method to return salary (as per the Employee interface)
    getSalary(): number {
      return this.salary;
    }
  
    // Additional method specific to FullTimeEmployee
    public getAnnualSalary(): number {
      return this.salary * 12;
    }
  }
  
  // 3. Generic Function to handle different Employee types
  export function printEmployeeDetails<T extends Employee>(employee: T): void {
    console.log(`Employee ID: ${employee.id}`);
    console.log(`Employee Name: ${employee.name}`);
    console.log(`Employee Department: ${employee.department}`);
    console.log(`Employee Salary: ${employee.getSalary()}`);

     // Find the container element
  const container = document.getElementById('employee-container');
  if (container) {
    // Create a new div element
  const employeeDetails = document.createElement('div');
  
  // Set the content of the div element
  employeeDetails.innerHTML = `
    <p><strong>Employee ID:</strong> ${employee.id}</p>
    <p><strong>Employee Name:</strong> ${employee.name}</p>
    <p><strong>Employee Department:</strong> ${employee.department}</p>
    <p><strong>Employee Salary:</strong> ${employee.getSalary()}</p>
  `;

  // Append the new div to the body or a specific container
  //document.body.appendChild(employeeDetails);
  container.appendChild(employeeDetails);

  }
  }
  
  // 4. Creating an instance of FullTimeEmployee class
  //const emp1 = new FullTimeEmployee(101, 'Alice', 'Engineering', 5000);
  
  // 5. Using the generic function to print details of the employee
  //printEmployeeDetails(emp1);
  
  // 6. Type Assertion Example
//   const salary = emp1.getSalary();
//   const salaryString: string = salary as unknown as string; // Type assertion
  
//   console.log(`Salary as string: ${salaryString}`);
  