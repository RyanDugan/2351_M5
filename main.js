console.log("Random Question: What is a piece of technology you wish existed?");

//For Loops
for (let i = 1; i <= 12; i++) {
  document.getElementById("test1").innerHTML = i;
  console.log(i);
}

//fruit loop...follow your nose!
const fruit = ["Apple", "Pear", "Strawberry", "Cherry", "Grape"];

let text = "";

for (let i = 0; i < fruit.length; i++) {
  text += fruit[i] + "<br>";
}

document.getElementById("test1.2").innerHTML = text;
