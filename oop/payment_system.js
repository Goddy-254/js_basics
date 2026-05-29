class PaymentMethod {
  constructor(accountName, balance, currency) {
    this.accountName = accountName;
    this.balance = balance;
    this.currency = currency;
  }

  pay(amount) {
    console.log("Payment processing");
  }

  deposit(amount) {
    this.balance += amount;
    console.log("Deposit successful.New Balance:" + this.balance);
  }
  checkBalance() {
    console.log(
      "Account:" +
        this.accountName +
        "Balance:" +
        this.balance +
        "  " +
        this.currency,
    );
  }
}

class Mpesa extends PaymentMethod {
  constructor(accountName, balance, currency, phoneNumber) {
    super(accountName, balance, currency);
    this.phoneNumber = phoneNumber;
  }
  pay(amount) {
    console.log(
      "Mpesa payment of " + amount + " " + this.currency + "sent successfully",
    );
  }
  transactionFee(amount) {
    let fee = amount * 0.02;
    console.log("Mpesa transaction fee:" + fee);
  }
}

class PayPal extends PaymentMethod {
  constructor(accountName, balance, currency, email) {
    super(accountName, balance, currency);
    this.email = email;
  }

  pay(amount) {
    console.log(
      "Paypal payment of " + amount + " " + this.currency + " successfully",
    );
  }
  transactionFee(amount) {
    let fee = amount * 0.05;
    console.log("Paypal transaction fee:" + fee);
  }
}

class CreditCard extends PaymentMethod {
  constructor(accountName, balance, currency, cardNumber) {
    super(accountName, balance, currency);
    this.cardNumber = cardNumber;
  }
  pay(amount) {
    console.log(
      "Credit card charged " + amount + " " + this.currency + " successfully",
    );
  }
  transactionFee(amount) {
    let fee = amount * 0.03;
    console.log("Credit card transaction fee:" + fee);
  }
}

let mpesa = new Mpesa("Joseph", 50000,"KES","070000000");
mpesa.checkBalance();
mpesa.deposit(20000);
mpesa.pay(15000);
mpesa.transactionFee(15000);

console.log("......................");
let paypal = new PayPal("Joseph", 50000,"KES","j@gmail.com");
paypal.checkBalance();
paypal.deposit(20000);
paypal.pay(15000);
paypal.transactionFee(15000);

console.log("......................");

let card = new CreditCard("Joseph", 50000,"KES",4353);
card.checkBalance();
card.deposit(20000);
card.pay(15000);
card.transactionFee(15000);