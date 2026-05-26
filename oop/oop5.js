class BankAccount {
    constructor(owner,balance){
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount){
       return this.balance += amount; 
    }
    withdraw(amount){
        return this.balance -= amount;
    }
    showBalance(){
        console.log("The remaining balance is", this.balance);
    }
}

let bal = new BankAccount("John",5000)
console.log(bal.deposit(3000));
console.log(bal.withdraw(1500));
bal.showBalance();
let bal2 = new BankAccount("key",5000)
bal2.showBalance();
