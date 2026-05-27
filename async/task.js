// setTimeout(function(){
//     console.log("WELCOME")
// // },5000);

// // Exercise 2
// // Create a Promise that resolves when marks are above 50
// // let marks = 15;
// let result = new Promise((resolve, reject) => {
//   if (marks > 50) {
//     resolve("succesfull");
//   } else {
//     reject("Not succesfull");
//   }
// });

// // result
// // .then(success => {
// //     console.log(success);
// // })

// // .catch(fail => {
// //     console.log(fail);
// // });

async function checkMarks(marks) {
  return new Promise((resolve, reject) => {
    if (marks > 50) {
      resolve("succesfull");
    } else {
      reject("failed vibaad sana");
    }
  });
}

async function showMarks() {
    try{
    let message = await checkMarks(12);
    console.log(message);
    }
    catch(error){
        console.log(error);
    };
    
}
showMarks();