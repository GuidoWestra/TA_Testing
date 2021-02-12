let a = 0;
let b = 1;
let c = 2;

while (a <= 7) {
  while (b <= 8) {
    while (c <= 9) {
      console.log(`${a}${b}${c}`);
      c++;
    }
    b++;
    c = b + 1;
  }
  a++;
  b = a + 1;
  c = b + 1;
}
