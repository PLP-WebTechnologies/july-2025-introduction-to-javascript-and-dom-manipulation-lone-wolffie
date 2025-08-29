//Variables & conditionals declaration

let age = 20; 

// DOM to check voting age 
document.getElementById("checkAgeBtn").addEventListener("click", function () {
  if (age >= 18) {
    document.getElementById("ageResult").textContent = "You are an adult. You are eligible to vote.";
  } else {
    document.getElementById("ageResult").textContent = "You are a minor. You are not qualify to vote.";
  }
});


// Function declarations
// Arrow function to calculate sum of 2 numbers
const calculateSum = (a, b) => {
  return a + b;
}

// Normal function format to greet someone
function greetUser(name) {
  return `Hello ${name}! Welcome to my demo.`;
}

document.getElementById("sumBtn").addEventListener("click", function () {
  let result = calculateSum(5, 7);
  document.getElementById("sumResult").textContent = `Sum: ${result}`;
});

document.getElementById("greetBtn").addEventListener("click", function () {
  let result = greetUser("Karen");
  document.getElementById("greetResult").textContent = result;
});


// For Loop with a time out anonymous function
document.getElementById("countBtn").addEventListener("click", function () {
  const resultElement = document.getElementById("countdownResult");
  resultElement.textContent = ""; // Clear previous output

  for (let i = 5; i > 0; i--) {
    setTimeout(() => {
      resultElement.textContent += i + "... ";
    }, (5 - i) * 1000); // 1 second between each number
  }

  // Anonymous function 
  setTimeout(() => {
    resultElement.textContent += "countdown done!";
  }, 5000);
});

// For...of loop to loop through an array of fruits
document.getElementById("listBtn").addEventListener("click", function () {
    const fruits = ["Pineapple", "Peach", "Grapes", "Watermelon"];
    let listElement = document.getElementById("fruitList");

    let listHTML = "";
    for (const fruit of fruits) {
    listHTML += `<li>${fruit}</li>`;
    }

    listElement.innerHTML = listHTML;

});

// DOM Manipulation to change background color

document.getElementById("changeColorBtn").addEventListener("click", () => {
  document.body.style.backgroundColor = "gold";
});

// DOM Manipulation to toggle between showing and hiding text
document.getElementById("toggleTextBtn").addEventListener("click", function () {
  let text = document.getElementById("extraText");
  let btn = document.getElementById("toggleTextBtn");
  if (text.style.display === "none") {
    text.style.display = "block";
    btn.textContent = "Hide Text";
  } else {
    text.style.display = "none";
    btn.textContent = "Show Text";
  }
});

