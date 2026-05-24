class ElectricityBill {
    constructor(customerName,unitsConsumed,costPerUnit){
    this.customerName = customerName;
    this.unitsConsumed = unitsConsumed;
    this.costPerUnit = costPerUnit;
    }
//calaculates bill
    calculateBill(){
        return this.unitsConsumed * this.costPerUnit;
    }
    //add 5% tax
    applyTax(){
        let totalBill = this.calculateBill();
        let tax = totalBill * 0.05;
        return totalBill + tax ;

    }

    billInfo(){
        console.log("Customer:"+ this.customerName);
        console.log("Units Consumed"+ this.unitsConsumed);
        console.log("Bill before tax:"+ this.calculateBill());
        console.log("Bill after tax :"+ this.applyTax());

    }
}
let customer = new ElectricityBill("John", 100, 10);
customer.billInfo();