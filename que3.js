// Question 3 — Employee Work System 
// Create a parent class called Employee. 
// Requirements for Employee: 
//  Add method: 
// o work() 
// Create child classes: 
//  Developer 
//  Designer 
//  Manager 
// Requirements: 
//  Override: 
// o work() 
// Outputs: 
//  Developer → Developer writes code 
//  Designer → Designer creates UI designs 
//  Manager → Manager supervises employees 
// Tasks: 
//  Create objects for all employees 
//  Call: 
// o work() 
// Expected Output: 
// Developer writes code 
// Designer creates UI designs 
// Manager supervises employees

class Employee{
    work(){
    console.log("employee is working");
    }
}
class Developer extends Employee{
    work(){
        console.log("Developer writes code");
    }
}
class Designer extends Employee{
    work(){
        console.log("Designer creates UI designs");
}
}
class Manager extends Employee{
    work(){
        console.log(" Manager supervises employees");
    }
}
let developer = new Developer();
developer.work();
let designer = new Designer();
designer.work();
let manager = new Manager();
manager.work();