const nextJokeButton = document.getElementById('jokeButton')
const url = "https://api.chucknorris.io/jokes/random";
let currentNumber = 0;

const fillJoke = (data) => {
    document.getElementById('joke').innerHTML = data.value;
}

async function getJoke(url) {
    try{
        const response = await fetch(url);
        const joke = await response.json();
        console.log(joke.value);
        fillJoke(joke);
    }
    catch (error) {
        console.error("Error: ", error);
    }
}

function getRandomInt(max) {
    let newNumber = Math.floor(Math.random() * max) + 1;
    while (newNumber === currentNumber){
        newNumber = Math.floor(Math.random() * max) + 1;
    }
    currentNumber = newNumber;
    return newNumber;
}

function changeImage(){
    let imagePlaceholder = document.getElementById('imageContainer');
    imagePlaceholder.innerHTML = `<img id="imageOfChuck" src="images/chuck${getRandomInt(4)}.jpeg"></img>`;
}

nextJokeButton.addEventListener("click", () => {
    getJoke(url);
    changeImage();
})

getJoke(url);
changeImage();