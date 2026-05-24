// function showName() {
//     console.log(this.name);
// }

// const user1 = { name: "John", showName };
// const user2 = { name: "Mary",  showName };

// user1.showName(); // John
// user2.showName(); // Mary


let bankAccount = {
    owner : "john",
    balance : 5000,

     deposit(amount){
        this.balance+=amount;
    },
    
     withdraw(amount){
        this.balance-=amount;
    }
}
bankAccount.deposit(5000);
bankAccount.withdraw(2000);
console.log(bankAccount.balance);
