// Requirements: 
//  Add a property called balance 
//  Create: 
// o a getter called currentBalance 
// o a setter called updateBalance 
//  The setter should: 
// o only allow values greater than or equal to 0 
//  Create an account with balance 5000 
//  Try updating the balance to: 
// o 8000 
// o -3000 
//  Display the final balance 
// Expected Output: 
// 8000 


class BankAccount{
    constructor(balance){
      this.balance = balance;
    }

    get currentBalance (){
       return this.balance = this.balance;
    }

    set updateBalance(value){
        if(value >=0){
        this.balance = value;

    }
}
}
let account = new BankAccount(5000);

account.updateBalance = 8000;
console.log(account.currentBalance);