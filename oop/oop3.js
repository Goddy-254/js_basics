class Employee {
  constructor(name, salary, hoursWorked) {
    this.name = name;
    this.salary = salary;
    this.hoursWorked = hoursWorked;
  }
  calculateBonus() {
    let bonus;
    if (this.hoursWorked > 40) {
       bonus = this.salary * 0.1;
    } else{
        bonus = 0;
    }

        return bonus;
}

finalSalary(){
    return this.salary + this.calculateBonus();
  }

  employeeinfo(){
    console.log(this.name+ " earns a basic salary of " + this.salary + " and a finalSalary of " + this.finalSalary());
  }
}
let employee1 = new Employee("John",50000,45);
employee1.employeeinfo();

