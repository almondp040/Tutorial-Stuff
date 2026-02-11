

const express = require('express');
const path = require('path');
const { grabJokeFromAPI } = require('./api');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

const appListen = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


const getHomePage = app.get('/home', (request, response)=>{
  //Serves the Jokes page to the /home route
  response.sendFile(path.join(__dirname, 'public', 'jokes.html'));
  
  grabJokeFromAPI().then(joke => {
    console.log('Joke received in getHomePage:', joke);
  }).catch(error => {
    console.error('Error in getHomePage:', error);
  });
}); 





module.exports = {
  getHomePage, 
  appListen
};


