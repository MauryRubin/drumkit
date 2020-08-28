var button = document.querySelectorAll(".key"); //  var to get all the key elements




for (i = 0; i < button.length; i++) { // IDEA: for loop to run through the # of key elements

  button[i].addEventListener("click", function() {
    var key = this.innerHTML;
    makeSound(key);
    buttonAnimation(key);

  });
} // IDEA: ghost function to apply an event listener to the key element. the 'this' references the DOM selector. this grabs the
// innerHTML and uses it as an input the the switch function. should grab a WASDJKL


document.addEventListener("keypress",function(event){


  var key = event.key;
  makeSound(key);
  buttonAnimation(key);

});
// applies the event listener to the entire document and waits for a key to be pressed
// this takes the event as a function parameter. the .key selects the key element and passes it as an input
// for the makeSound function


// function to check key against the switch that has been created (a switch is like a trolley)


function makeSound(key){

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(key);

  }

}


function buttonAnimation(key){
  var activeButton = document.querySelector("." +key);

       activeButton.classList.add("pressed");
      setTimeout(function(){activeButton.classList.remove("pressed");},100);  

}
