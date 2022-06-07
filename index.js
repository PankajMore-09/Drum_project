//This is the comments

//detecting button press
var numberOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var ButtonInnerHTML = this.innerHTML;

    makeSound(ButtonInnerHTML);
    buttonAnimation(ButtonInnerHTML);
  });
}

//detecting key press
document.addEventListener("keypress",function(event)
{
  makeSound(event.key);
  buttonAnimation(event.key);

}); 

function makeSound(key)
{
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      this.style.color = "white";
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      this.style.color = "blue";
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      this.style.color = "purple";
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      this.style.color = "green";
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      this.style.color = "red";
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      this.style.color = "yellow";
      kick_bass.classList.add("pressed");
      break;

    case "l":
      var kick_bass = new Audio("sounds/kick-bass.mp3");
      kick_bass.play();
      this.style.color = "black";
      kick_bass.classList.add("pressed");
      break;

    default:console.log(ButtonInnerHTML);
      break;
  }

}

function buttonAnimation(currentKey)
{
  var activeButton = document.querySelector("."+ currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function()
  {
    activeButton.classList.remove("pressed");
  },100)

}

