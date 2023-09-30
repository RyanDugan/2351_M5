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
console.log(fruit);

// While Loop

//i is assigned to 0 and while the loop iterates and i is less than 10 the while loop continues. It is also increasing by two after initiating.

let i = 0;
while (i < 10) {
  document.getElementById("test2").innerHTML = i;
  console.log(i);
  i = i + 2;
}

// Do While Loop
{
  let txt = "";
  let i = 11;

  do {
    txt += "The Number is " + i;
    i++;
  } while (i < 10);
  document.getElementById("test2.2").innerHTML = txt;
}

//Change CSS with JS
//color of first p element is changed from blue to red. Both have a class of "blue".
document.getElementsByClassName("blue")[0].style.color = "red";

//the style was transformed with js!
document.getElementById("test3").style.transform = "rotate(5deg)";

//Change CSS based upon variable value

function changeColor() {
  document.getElementById("test4").classList.toggle("blueColor");
}

// Part 2
const toggleButton = document.getElementById("toggleButton");
const subject = document.getElementById("subject");

let blueColor = true;

toggleButton.addEventListener("click", function () {
  if (blueColor) {
    subject.classList.remove("blueColor");
    subject.classList.add("redColor");
  } else {
    subject.classList.remove("redColor");
    subject.classList.add("blueColor");
  }
  blueColor = !blueColor;
});

// Part 3
const subjectTwo = document.getElementById("subjectTwo");

subjectTwo.addEventListener("click", function () {
  if (subjectTwo.classList.contains("blueColor")) {
    subjectTwo.classList.remove("blueColor");
    subjectTwo.classList.add("redColor");
  } else {
    subjectTwo.classList.remove("redColor");
    subjectTwo.classList.add("blueColor");
  }
});
