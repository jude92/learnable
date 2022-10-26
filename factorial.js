function factorial(x) {
  if (x == 0) {
    // stoping condition
    return 1;
  } else {
    return x * factorial(x - 1); // keep decreasing x by 1 untill it meets the stoping condition
  }
}
let num = 5;

if (num > 0) {
  let result = factorial(num);
  console.log("the factorial of " + num + " " + "is" + " " + result);
}
