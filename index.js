const greeting = 'This is only the beginning.';

//Grab my button, add an event listener to it
const button = document.getElementById('button');
button.addEventListener('click', () => {
    alert(greeting);
});