// class Student {
//   constructor(name, course) {
//     this.name = name;
//     this.course = course;
//   }
// }

// const student1 = new Student("John", "IT");
// const student2 = new Student("Brian", "Data analytics");

// // console.log(student1);
// // console.log(student2);

// class Car {
//   constructor(model, color) {
//     this.model = model;
//     this.color = color;
//   }
//   displayInformation() {
//     console.log(this.model, this.color);
//   }
// }
// const car1 = new Car("Toyota", "Black");
// const car2 = new Car("BMW", "Blue");

// // console.log(car1);
// // console.log(car2);
// car1.displayInformation();


// class BankAccount {
//     constructor(owner,balance){
//         this.owner = owner;
//         this.balance = balance;
//     }

//     deposit(){
//         this.balance += 2000;
//         console.log(this.balance)
//     }
// }

// let person1 = new BankAccount("John", 5000);
// person1.deposit();
class Rectangle {
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    perimeter(){
     return 2*(this.width + this.height);
    }
    area(){
     return this.width * this.height;
    }
}
let farm = new Rectangle(5,5);
console.log(farm.perimeter());
console.log(farm.area());