console.log("Hello NVC");

const animals = ["Fish", "Cat", "Dog", "Bird"];

for (test of animals) {
  console.log(`Hello there ${test}`);
  if (test === "Dog") {
    console.log("We found Arf!");
    break;
  }
}

let loading = 0;

while (loading < 100) {
  console.log("Website is still loading...");

  loading += 2;
}

let x;
for (x = 0; x < 10; x++) {
  console.log(x);
}

const fruits = ["Apple", "Banana", "Orange"];

for (x of fruits) {
  console.log(x);
}
