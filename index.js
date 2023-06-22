

//Detecting clicks
var numOfButtons = document.querySelectorAll(".drum").length;
for(var i=0; i<numOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){

        var buttonIH = this.innerHTML;

        makesSound(buttonIH);
        buttonPress(buttonIH);
    });
}

//Detecting Buttons
document.addEventListener("keydown",function(event){
    makesSound(event.key);
    buttonPress(event.key);
;});

//Deetcting Hover
var numOfBtn = document.querySelectorAll(".drum").length;
for(var i=0; i<numOfBtn; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("mouseover",function (){

        var buttonIH = this.innerHTML;

        makesSound(buttonIH);
        buttonPress(buttonIH);
    });
}


//Music
function makesSound(key){

    switch(key){

            case "w" :
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();

            case "a" :
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();

            case "s" :
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();

            case "d" :
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();

            case "j" :
                var snare = new Audio("sounds/snare.mp3");
                snare.play();

            case "k" :
                var crash = new Audio("sounds/crash.mp3");
                crash.play();

            case "l" :
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
    }
}



//Button Press Animation
function buttonPress(key){

    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)

}
//Header colour change
document.querySelector("#title").addEventListener("click",function (){
            this.style.color = "pink";
});
