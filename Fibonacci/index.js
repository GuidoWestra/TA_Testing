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

/* 
0 1 1 2 3 5 8 13 21 34
*/
