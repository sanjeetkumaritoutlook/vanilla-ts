Interfaces:

We defined an Employee interface that specifies the structure of employee objects. It includes id, name, department, and a method getSalary().
Classes and Access Modifiers:

The FullTimeEmployee class implements the Employee interface.
It uses access modifiers (public and private). id, name, and department are public and can be accessed from outside the class, while salary is private and cannot be accessed directly.
The getSalary() method returns the employee's salary, fulfilling the interface contract.
Type Annotations:

Type annotations are used in the constructor and method signatures to specify types for variables like id: number, name: string, and salary: number.
Generics:

The printEmployeeDetails function is a generic function that takes a parameter of type T, which extends the Employee interface. This allows the function to work with any object that matches the Employee structure, ensuring type safety.
Type Assertion:

At the end of the example, we demonstrate type assertion where we assert that the salary, initially a number, is treated as a string. Type assertions help in bypassing certain type checks.
----
Explanation:
Exporting: In the employee.ts file, we use the export keyword to export the FullTimeEmployee class and the printEmployeeDetails function. This makes them available for import in other files.
Importing: In the main.ts file, we import the FullTimeEmployee class and printEmployeeDetails function using the import statement.
You can either import specific elements like { FullTimeEmployee, printEmployeeDetails } or use a wildcard * to import everything if needed.
---
Module System: TypeScript uses the ES Module system (with import and export), so ensure your TypeScript configuration (tsconfig.json) supports this. If you're using Node.js, make sure it supports ES Modules or use module: "commonjs" for compatibility.

Decorators example:
---
1. Class Decorator Example

2. Method Decorator Example
3. Property Decorator Example
4. Parameter Decorator Example
---
Class Decorators: Applied to a class and modify its behavior.
Method Decorators: Applied to a method to modify or extend its functionality.
Property Decorators: Applied to a class property to modify its behavior.
Parameter Decorators: Applied to a method's parameter to track or modify its behavior
