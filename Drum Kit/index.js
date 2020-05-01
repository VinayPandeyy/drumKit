// method 1
document.querySelectorAll("button")[0].addEventListener("click", buttonClick);
document.querySelectorAll("button")[1].addEventListener("click", buttonClick);
document.querySelectorAll("button")[2].addEventListener("click", buttonClick);
document.querySelectorAll("button")[3].addEventListener("click", buttonClick);
document.querySelectorAll("button")[4].addEventListener("click", buttonClick);
document.querySelectorAll("button")[5].addEventListener("click", buttonClick);
document.querySelectorAll("button")[6].addEventListener("click", buttonClick);


//OR Method 2
// var numberOfDrumButton = document.querySelectorAll(".drum").length;
// for(var i=0; i<numberOfDrumButton;i++){
//   document.querySelector(".drum").addEventListener("click", function(){
//    alert("i got clicked");
//  });
// }


function buttonClick(){

var buttonInnerHtml = this.innerHTML;

makeSound(buttonInnerHtml);

buttonAnimation(buttonInnerHtml);

switch (buttonInnerHtml) {

  case "w":
  var tom1 = new Audio('sounds/tom-1.mp3');
  tom1.play();
  break;

  case "a":
  var tom2 = new Audio('sounds/tom-2.mp3');
  tom2.play();
  break;

  case "s":
  var tom3 = new Audio('sounds/tom-3.mp3');
  tom3.play();
  break;

  case "d":
  var tom4 = new Audio('sounds/tom-4.mp3');
  tom4.play();
  break;

  case "j":
  var snare1 = new Audio('sounds/snare.mp3');
  snare1.play();
  break;

  case "k":
  var crash = new Audio('sounds/crash.mp3');
  crash.play();
  break;

  case "l":
  var kick = new Audio('sounds/kick-bass.mp3');
  kick.play();
  break;

  default:console.log(buttonInnerHtml);

  }
}




document.addEventListener("keypress",function(event){

makeSound(event.key);
buttonAnimation(event.key);

 }
);


function makeSound(key){

  switch (key) {

      case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

      case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

      case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

      case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

      case "j":
      var snare1 = new Audio('sounds/snare.mp3');
      snare1.play();
      break;

      case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

      case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default:console.log(buttonInnerHtml);

    }
}




function buttonAnimation(currentKey){
var activeButton = document.querySelector("."+currentKey);
activeButton.classList.add("pressed");

setTimeout(function(){activeButton.classList.remove("pressed");},100);

}
