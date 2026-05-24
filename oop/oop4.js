class  MovieTicket {
    constructor(movieName,ticketPrice,numberOfTickets){
        this.movieName = movieName;
        this.ticketPrice = ticketPrice;
        this.numberOfTickets = numberOfTickets;

    }
    
    calculateCost(){
        return this.ticketPrice * this.numberOfTickets;
    }
    applyDiscount(){
        let discountedPrice;
        if(this.numberOfTickets > 5){
            
            discountedPrice = this.calculateCost() - this.calculateCost() * 0.15;

        }
        else {
            discountedPrice =   this.calculateCost();
        }
        return discountedPrice;
    }
    ticketInfo(){
        console.log("Movie Name:" + this.movieName);
        console.log("Tickets:" + this.numberOfTickets);
        console.log("Total cost:" + this.applyDiscount());

    }

}
let movie1 = new MovieTicket("Avengers",50,5);
let movie2 = new MovieTicket("thor",50,7);

movie1.ticketInfo();
movie2.ticketInfo();

