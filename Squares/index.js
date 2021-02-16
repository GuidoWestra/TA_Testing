function Buildhouse() {
  //Drawing Variables
  let a = 0;
  let b = 0;

  // X & Y, Axis defined here!
  const x = 8;
  const y = 5;
  console.log(`Details entered X:${x} Y:${y}`);
  while (a < x) {
    if (y === 5) {
      console.log("*   *");
    }
    if (y === 4) {
      console.log("****");
    }
    if (y === 3) {
      console.log("*****");
    }
    a++;
  }
}
Buildhouse();
