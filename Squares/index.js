function Buildhouse() {
  let params = process.argv.slice(2);

  // Drawing axis
  let a = 0;
  let b = 0;
  let Line = "";

  // X & Y, Axis defined here!
  let x = params[0];
  let y = params[1];

  // Providing details to User
  console.log(`Details entered X:${x} Y:${y}`);

  // House Building

  while (a < x) {
    while (b < y) {
      Line = `${Line}*`;
      b++;
    }
    console.log(Line);
    a++;
    Line = "";
    b = 0;
  }
}
Buildhouse();
