class Animal{
eat(){
    console.log("Animal is eating");
}
}
class Dog extends Animal{
bark(){
    console.log("The Dog is Barking");

}
}
let dog = new Dog();
dog.eat();
dog.bark();
