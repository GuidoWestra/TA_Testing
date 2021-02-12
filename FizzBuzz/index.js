let i = 0;
while (i < 100) {
  if (i === 0) console.log(i);
  else if (i % 15 === 0) {
    console.log("FIZZBUZZ");
  } else if (i % 5 === 0) {
    console.log("BUZZ");
  } else if (i % 3 === 0) {
    console.log("FIZZ");
  } else console.log(i);
  i++;
}
