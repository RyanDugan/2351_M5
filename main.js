console.log("Random Question: What is a piece of technology you wish existed?");

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

//For Loop
for (let i = 1; i <= 12; i++) {
  document.getElementById("test1").innerHTML = i;
  console.log(i);
}
