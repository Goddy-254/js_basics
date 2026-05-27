let promise = new Promise((resolve,reject) => {
let avail = true ;

if(!avail){
    resolve("operation is successfull");
} else {
    reject("operation failed");
}

});

promise.
then((result) =>{
    console.log(result);
})
.catch((fail) =>{
    console.log(fail);
})
