// Description: This file contains the code for the drum kit game


const drum_button = document.querySelectorAll(".drum");

// Detecting Button Press
for(let i = 0; i < drum_button.length; i++) {
    drum_button[i].addEventListener("click", function() {
        var source = this.innerHTML;
        console.log(source);
        doEvent(source);
    });
}

// Detecting Keyboard Press
document.addEventListener("keydown", function(event) {
    var source = event.key;
    console.log(source);
    doEvent(source.toLowerCase());
});

// Function to play sound and animation
function doEvent(source){
    switch (source) {
        case tom1.key:
            tom1.playSound();
            tom1.doAnimation();
            break;
        case tom2.key:
            tom2.playSound();
            tom2.doAnimation();
            break;
        case tom3.key:
            tom3.playSound();
            tom3.doAnimation();
            break;
        case tom4.key:
            tom4.playSound();
            tom4.doAnimation();
            break;
        case snare.key:
            snare.playSound();
            snare.doAnimation();
            break;
        case crash.key:
            crash.playSound();
            crash.doAnimation();
            break;
        case kick.key:
            kick.playSound();
            kick.doAnimation();
            break;
        default:
            console.log("Error");
    }
}

// Object Constructor
function DrumKit(key , sound , image) {
    this.key= key;
    this.soundSource = sound;
    this.imageSource = image;
    this.playSound = function () {
        var audio = new Audio(this.soundSource);
        audio.play()};
    this.doAnimation = function(){
            var activeButton = document.querySelector("."+ this.key).classList
            activeButton.add("pressed");
            setTimeout(function(){
                activeButton.remove("pressed");
            }, 200)
    };
}

// Object Instances
var tom1 = new DrumKit("w" , "sounds/tom-1.mp3" , "images/tom-1.png");
var tom2 = new DrumKit("a" , "sounds/tom-2.mp3" , "images/tom-2.png");
var tom3 = new DrumKit("s" , "sounds/tom-3.mp3" , "images/tom-3.png");
var tom4 = new DrumKit("d" , "sounds/tom-4.mp3" , "images/tom-4.png");
var snare = new DrumKit("j" , "sounds/snare.mp3" , "images/snare.png");
var crash = new DrumKit("k" , "sounds/crash.mp3" , "images/crash.png");
var kick = new DrumKit("l" , "sounds/kick-bass.mp3" , "images/kick-bass.png");




