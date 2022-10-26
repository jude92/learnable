/*
let num = 10;
let n1 = 0;
let n2 = 1;
//let next;
console.log("fibinacci series");
console.log(n1);
console.log(n2);
let next = n1 + n2;
while (next <= num) {
  console.log(next);
  n1 = n2;
  n2 = next;
  next = n1 + n2;
}
*

function randomNo() {
  let no = Math.floor(Math.random() * 10) + 1;
  let guess = 6;
  if (guess != no) {
    console.log("wrong answer,try again");
  }
  if (guess === no) {
    console.log("great,you guessed right");
  }
}
randomNo();
*/
// finding a random number from array
function randomItem(arr) {
  let randNo = Math.floor(Math.random() * arr.length);
  let item = arr[randNo];
  return item;
}
let arran = [1, 4, 3, "henry", "yesLord", "12th aug"];
let result = randomItem(arran);
console.log(result);
