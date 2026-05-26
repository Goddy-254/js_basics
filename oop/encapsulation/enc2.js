// Question 2 — Student Marks Protection System 
// Create a class called Student. 
// Requirements: 
//  Add properties: 
// o name 
// o marks 
//  Create: 
// o getter called studentMarks 
// o setter called updateMarks 
//  The setter should only allow marks between: 
// o 0 
// o 100 
//  Create a student called Brian with marks 70 
//  Update marks to: 
// o 95 
// o 150 
//  Display: 
// Brian scored 95 

class Student {
    constructor(name,marks) {
    this.name = name ;
    this.marks = marks ;
    }

    get studentMarks(){
        this.marks
    }

    set updateMarks(value){
        if (value >= 0 && value <= 100){
        return this.marks = value;
        }
    }
}
let student = new Student("Brian", 15);
student.updateMarks = 98 ;
console.log(student.marks);