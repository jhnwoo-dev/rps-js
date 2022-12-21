//1. Ask use for their selection
//TODO: prompt user to for their choice (rock, paper, scissors);
//TODO: EDGE CASE: What happens if the user doesn't pick rock, paper, or scissor?
//TODO: EDGE CASE: What happens if casing doesn't match?
//TODO: EDGE CASE: What happens if submit is empty?

function game() {
    alert("Hello! Let's play rock, paper, scissors!");
    var userInput = prompt("Please type r, p, or s below:", "r, p, or s");
}
//2. Generate the computer selection
//TODO: We need a random selection of rock, paper, or scissors.
//TODO: Look up a random number generator is js;
var compOptions = ["r", "p", "s"];
var compSelect = compOptions[Math.floor(Math.random() * compOptions.length)];

console.log(compSelect);

//3. Compare selections
//TODO: If use picks r && comp picks s or user pciks && compp picks p, win;
//TODO: If user and comp pick are teh same, that's a tie;
//TODO: IF comp picks r && user picks s or comp picks s && user picks p, loss;
if (userInput === "r" && compSelect === "p") {
    console.log("The computer won!")
} else if (userInput === "s" && compSelect === "r") {
    console.log("The computer won!")
} else if (userInput === "p" && compSelect === "s") {
    console.log("The computer won!")
} else if (userInput === compSelect) {
    console.log("It's a tie!")
} else if (userinput === "r" && compSelect === "s") {
    console.log("You won!")
} else if (userinput === "p" && compSelect === "r") {
    console.log("You won!")
} else if (userinput === "s" && compSelect === "p") {
    console.log("You won!")
}


//4. Display result
//TODO: Show result to the user in popup;


//5. Display stats
//TODO: create some variable for win, loss and tie
//TODO: Update the appropriate varaible based on the result


//6. Ask to play again

game();