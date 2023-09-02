// index.js


function rollTheDice(){
    debugger;
    var randomNumber1 = Math.floor(1 + (Math.random() * 6));
    var randomNumber2 = Math.floor(1 + (Math.random() * 6));

    var randomImageSource = "images/dice" + randomNumber1 + ".png"
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource);

    var randomImageSource2 = "images/dice" + randomNumber2 + ".png"
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImageSource2);

    const bounceButton = document.getElementById('bounceButton');

    bounceButton.classList.add('bounce');

    // Remove the "bounce" class after the animation completes
    setTimeout(() => {
        bounceButton.classList.remove('bounce');
    }, 800); // Adjust the time to match your animation duration
    

    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").textContent = "Player 1 wins!!";
    } else if (randomNumber1 < randomNumber2){
        document.querySelector("h1").textContent = "Player 2 wins!!";
    } else {
        document.querySelector("h1").textContent = "It's a draw!!";
        
    }

    document.querySelector("h1").style.color = getRandomColor();

    
}

function getRandomColor() {
    var red = Math.floor(Math.random() * 256);     // Random value between 0 and 255
    var green = Math.floor(Math.random() * 256);   // Random value between 0 and 255
    var blue = Math.floor(Math.random() * 256);    // Random value between 0 and 255

    var color = "rgb(" + red + "," + green + "," + blue + ")";
    return color;
}
