
var numOfDrumBtn = document.querySelectorAll(".drum").length;

for (var i=0; i<numOfDrumBtn; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){

        alert("Button is clicked!")
    });

}




