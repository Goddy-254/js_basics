// Question 1 — School Management System 
// Create a parent class called User. 
// Requirements for User: 
//  Add properties: 
// o name 
// o email 
//  Add a method: 
// o login() 
// Create a child class called Student. 
// Requirements for Student: 
//  Inherit from User 
//  Add property: 
// o course 
//  Add method: 
// o submitAssignment() 
// Tasks: 
//  Create a student called Brian 
//  Email: brian@gmail.com 
//  Course: Software Development 
//  Call: 
// o login() 
// o submitAssignment() 
// Expected Output: 
// Brian logged in 
// Brian submitted assignment

class User {
    constructor(name,email){
        this.name = name;
        this.email= email;
    }

    login(){
        console.log(this.name + "has logged in...")
    }
}

class Student extends User{

    constructor(name,email,course){
        super(name,email);
        this.course = course ;
    }
    submitAssignment(){
        console.log(this.name+ " has submitted assignment...")
        
    }
}
 let person = new Student("Brian","Brian@gmail.com","Software Engeneering");
 person.login();
 person.submitAssignment();
