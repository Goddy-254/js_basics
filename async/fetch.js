// fetch("https://jsonplaceholder.typicode.com/users") 
// .then(function(response){ 
// return response.json(); 
// }) 
// .then(function(data){ 
// console.log(data); 
// }) 
// .catch(function(error){ 
// console.log(error); 
// }); 

async function getUsers (){
 try{
    let user = await fetch("https://jsonplaceholder.typicode.com/users");
    let responce = await user.json();
    console.log(responce);
 }
 catch(error){
    console.log(error);
 }

}
getUsers();