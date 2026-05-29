// // Advanced Challenge — Game Character Attack System
// // Create a parent class called Character.
// // Requirements for Character:
// //  Add properties:
// // o name
// // o health
// //  Add method:
// // o attack()
// // The parent method should display:
// // Character attacks
// // Create child classes:
// //  Warrior
// //  Mage
// //  Archer
// // Requirements:
// //  Override:
// // o attack()
// // Outputs:
// //  Warrior → Warrior attacks with sword
// //  Mage → Mage casts magic spell
// //  Archer → Archer shoots arrows
// // Tasks:
// //  Create one object for each character
// //  Call:
// // o attack()
// // Expected Output:
// // Warrior attacks with sword
// // Mage casts magic spell
// // Archer shoots arrows

// class Character {
//   constructor(name, health) {
//     this.name = name;
//     this.health = health;
//   }
//   attack() {
//     console.log("character attacks");
//   }
// }
// class Warrior extends Character {
//   constructor(name, health) {
//     super(name, health);
//   }
//   attack() {
//     console.log("Warrior attacks with sword");
//   }
// }
// class Mage extends Character {
//   constructor(name, health) {
//     super(name, health);
//   } 
//   attack(){
//     console.log("Mage casts with a spell");
//   }
  
// }
// class Archer extends Character {
//   constructor(name, health) {
//     super(name, health);
//   }
//   attack(){
//     console.log("Archer shoots arrows");
//   }
  
// }

// let warrior = new Warrior("Goddy",20);
// warrior.attack();

// let mage = new Mage("Goddy",20);
// mage.attack();

// let archer = new Archer("Goddy",20);
// archer.attack();



