var firstName = "alice";
var age = 20;
var tuitionFee = 45000;
var discount = 0.1;

var finalFee = tuitionFee - tuitionFee * discount;

console.log(
  "Student: " +
    firstName +
    " \nAge :" +
    age +
    "\nFee after discount: KES" +
    finalFee,
);
console.log("Final fee :", finalFee);
