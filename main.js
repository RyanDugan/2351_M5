console.log("Hello NVC");

const animals = ["Fish", "Cat", "Dog", "Bird"];

for (name of animals) {
  console.log(`Hello there ${name}`);
  if (name === "Dog") {
    console.log("We found Arf!");
    break;
  }
}

let loading = 0;

while (loading < 100) {
  console.log("Website is still loading...");

  loading += 2;
}
