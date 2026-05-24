let primes = "";
for (let i = 1;i <= 20;i++){

    let isPrime = true;
    if(i < 2){
        isPrime = false;
    }
    for(let j = 2; j < i ;j++ ){
        if(i % j === 0){
            isPrime = false;
        }
        if(isPrime){
            primes += i + "";
            console.log(primes);
        }
    }
    
}