

let numberOfButtons = document.querySelectorAll('.btn').length;

// Checking button press

for(let i=0; i < numberOfButtons; i++) {
      
    document.querySelectorAll(".btn")[i].addEventListener( 'click', function() {
        // why this.innerHTML is not working in arrow function ?
       let buttonInnerHtml = this.innerHTML;

       console.log(buttonInnerHtml);
       playSound(buttonInnerHtml);
       
    });
}

// *** Checking keyboard press ****

document.addEventListener("keypress", (e) => {
    playSound(e.key);
});


// *** playing audio on key press ***
function playSound(key) {

    switch (key) {
       
        case "a":
            var tom_drum = new Audio('sounds/small_tom.mp3');
            tom_drum.play();
            break;
        case "s":
            var snare_drum = new Audio('sounds/snare_drum.mp3');
            snare_drum.play();
            break;

        case "d":
            var crash_cymbal = new Audio('sounds/crash_cymbal.mp3');
            crash_cymbal.play();
            break;

        case "f":
            var ride_cymbal = new Audio('sounds/ride_cymbal.mp3');
            ride_cymbal.play();
            break;

        case "h":
            var hi_hat = new Audio('sounds/hi_hat.mp3');
            hi_hat.play();
            break;

        case "j":
            var medium_tom = new Audio('sounds/medium_tom.mp3');
            medium_tom.play();
            break;

        case "k":
            var floor_tom = new Audio('sounds/floor_tom.mp3');
            floor_tom.play();
            break;
        case "l":
            var bass_drum = new Audio('sounds/bass_drum.mp3');
            bass_drum.play();
            break;
     
        default:
            console.log(key + " Wrong key press \n");
     }
}




