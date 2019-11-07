var numOfDrumBtn = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfDrumBtn; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttomInnerHtml = this.innerHTML;

        makesound(buttomInnerHtml);
        buttonAnimation(buttomInnerHtml);

    });

}

document.addEventListener("keypress", function(event){
    makesound(event.key);
    buttonAnimation(event.key);
})

document.addEventListener("keypress", function(e){
    console.log(e);
})


function makesound(key) {


    switch (key) {
        case "w":

                var tom1Audio = new Audio('sounds/tom-1.mp3');
                tom1Audio.play();

            break;

        case "a":

                var tom1Audio = new Audio('sounds/tom-2.mp3');
                tom1Audio.play();

            break;

        case "s":

                var tom1Audio = new Audio('sounds/tom-3.mp3');
                tom1Audio.play();

            break;


        case "d":

                var tom1Audio = new Audio('sounds/tom-4.mp3');
                tom1Audio.play();

            break;

        case "j":

                var tom1Audio = new Audio('sounds/snare.mp3');
                tom1Audio.play();

            break;

        case "k":

                var tom1Audio = new Audio('sounds/crash.mp3');
                tom1Audio.play();

            break;

        case "l":

                var tom1Audio = new Audio('sounds/kick-bass.mp3');
                tom1Audio.play();

            break;

        default: console.log(key);


    }
}

function buttonAnimation(currentkey){

    
    var activeButton = document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");

    setTimeout (function(){
        activeButton.classList.remove("pressed");
    }, 100);

}







