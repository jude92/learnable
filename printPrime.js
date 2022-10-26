let a = 2;
let b = 15;
let count = 0;
for (let i = a; i <= b; i++) {
  let count = 0;
  for (let k = 2; k < i; k++) {
    if (i % k === 0) {
      count += 1;
      break;
    }
  }

  if (i > 1 && count == 0) {
    console.log(i);
  }
}
