// // for(let i = 0; i <= 5; i++){
// // let star = "";

// // for(let j = 0; j < i; j++){
// // star = star + "*";
// // }
// // console.log(star);
// // }
// for(let i = 1; i <= 5 ;i++){
//     let nums = "";
//     for (let j = 1; j <= 4; j++){
//     nums += i;
//     }
//     console.log(nums);
// }
let num = "";

for (let i = 1; i <= 20; i++) {
  let prime = true;
  if (i < 2) {
    prime = false;
  }
  for (let j = 2; j < i; j++) {
    // nums += i;
    if (i % j === 0) {
      prime = false;
    }
  }
  if (prime) {
    num = num + i + " ";
  }
}
    console.log(num);

