// Question 4 — User Age Verification System
// Create a class called User.
// Requirements:
//  Add properties:
// o username
// o age
//  Create:
// o getter called userAge
// o setter called setAge
//  Only allow ages:
// o 18 and above
//  Create a user called john123 with age 20
//  Try updating age to:
// o 25
// o 15
//  Display

class User {
  constructor(username, age) {
    this.username = username;
    this.age = age;
  }
  get userAge() {
    return this.age;
  }
  set setAge(value) {
    if (value >= 18){
    return this.age = value;
  }
}
}

let person = new User("john123", 22);

person.setAge = 19 ;

console.log(person.age)

