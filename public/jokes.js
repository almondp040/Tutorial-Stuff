import { grabJokeFromAPI } from "./jokesAPI.js";

// Contain the logic to add our API data to the jokes page
const jokesParagraph = document.getElementById("jokesParagraph");

// Set the inner text to the data coming from the api:
grabJokeFromAPI().then((joke) => {
  if (joke) {
    jokesParagraph.innerText = `${joke.setUp} - ${joke.punchline}`;
  } else {
    jokesParagraph.innerText = "Failed to load joke.";
  }
});
