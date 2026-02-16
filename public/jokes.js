// Jokes Page Logic:
import { grabJokeFromAPI } from "./jokesAPI.js";

// Contain the logic to add our API data to the jokes page
const jokesParagraph = document.getElementById("jokesParagraph");
const jokesPunchline = document.getElementById("jokesPunchline");
const newJokeButton = document.getElementById("newJokeButton");

// Set the inner text to the data coming from the api:
const populateJokes = () => {
  grabJokeFromAPI().then((joke) => {
    if (joke) {
      jokesParagraph.innerText = `${joke.setUp}`;
      jokesPunchline.innerText = `${joke.punchline}`;
    } else {
      jokesParagraph.innerText = "Failed to load joke.";
    }
  });
};

//Can be used to populate the jokes on page load:
populateJokes();


//Upon clicking on the setup we want to change the display to be visible
jokesParagraph.addEventListener("click", () => {
  //change the color to black to make the punchline visible
  jokesPunchline.style.visibility = "visible";

  //show button here
  newJokeButton.style.visibility = "visible";
});


// When clicking the new joke button we want to either refresh the page or show new jokes
newJokeButton.addEventListener("click", () => {
  //Pull a new joke from the API: 
  populateJokes();
  //Make the punchline invisible again:
  jokesPunchline.style.visibility = "hidden";
});
