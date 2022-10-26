let root1, root2;

// take input from the user
let a = 2;
let b = 5;
let c = 1;

// calculate discriminant
let discriminant = b * b - 4 * a * c;

// condition for real and different roots
if (discriminant > 0) {
  root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

  // result
  console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// condition for real and equal roots
else if (discriminant == 0) {
  root1 = root2 = -b / (2 * a);
 
  // result
  console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}
