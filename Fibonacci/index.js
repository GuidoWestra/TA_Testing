let a = 0;
let b = 0;
let c = 0;

while (c < 100000) {
  c = a + b;
  console.log(c);
  a = b;
  b = c;
  if (c === 0) {
    a = 1;
  }
}
