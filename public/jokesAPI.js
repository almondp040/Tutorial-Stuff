// This will contain our code for using different apis

export const grabJokeFromAPI = async () => {
  try {
    return fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => {
        console.log("Joke fetched from API:", data);
        const setUp = data.setup;
        const punchline = data.punchline;
        return { setUp, punchline };
      })
      .catch((error) => {
        console.error("Error fetching joke:", error);
      });
  } catch (error) {
    console.error("Error fetching joke:", error);
  }
};


