//destructuring shorcut used to extract values from objects

const user = [
 {
    name : "goddy",
},
{
    name : "mike"
}];
const {name} = user[1];
console.log(name);
console.log(user[0].name);
const {name: username} = user[1];
console.log(username);


//renamig values in objects