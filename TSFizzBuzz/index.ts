let count = 0;

while (count < 100) {
  if (count === 0) {
    console.log(count);
  } else if (count % 15 === 0) {
    console.log("FizzBuzz", count);
  } else if (count % 5 === 0) {
    console.log("Buzz", count);
  } else if (count % 3 === 0) {
    console.log("Fizz", count);
  } else console.log(count);
  count++;
}
