const next_button = document.getElementById("next_button");
const current_phrase = document.getElementById("current_phrase");

let questions = [];

fetch("questions_cleaned.txt")
  .then(response => response.text())
  .then(text => {
    questions = text
      .split("\n")          // split into lines
      .map(line => line.trim())
      .filter(line => line.length > 0); // remove empty lines

    //console.log(questions);
  });

next_button.addEventListener("click", () => {
    let max = questions.length;
    let min = 0;
    let index = Math.floor(Math.random() * (max - min + 1)) + min;
    
    current_phrase.textContent = questions[index];
});