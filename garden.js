
 
// function to activate the pop-up
 
function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}

function togglePopup2(){
  document.getElementById("popup-2").classList.toggle("active");
}


// Create a variable that counts the animations
 
let animNumber = 0;
 
 
// Create a variable that counts the sounds
 
let soundNumber = 0;
 
 
// Create a variable for the different sound files
 
let soundnames =
["", "sound1.mp3","sound2.mp3", "sound3.mp3","sound2.mp3"];
 
 
// Create a variable for the different endings of the  https: paths to the animations
 
var filenames =
["lf20_l6qkz2hc.json", "lf20_2qussilj.json", "lf20_tzniy9kj.json", "lf20_tzniy9kj.json", "lf20_van2lrgb.json", "lf20_van2lrgb.json", "lf20_l6qkz2hc.json", "lf20_2qussilj.json"];


// Function that makes the sound of birds when the button is pressed

function play(){
  soundNumber = Math.floor((animNumber + 1) / 2)

  clearFields();
 
  let audio = new Audio (soundnames[soundNumber]);
  audio.play();
}

// Function that clears the field as soon as the Button is pressed

function clearFields() {
  document.getElementById("text-field").value = "";
 }
  
  
 // Function that shows the correct animation
  
 function showAnimation() {
  
  var textInnehall = document.getElementById("text-field").value;

  if (textInnehall.length == 0){
    togglePopup2();
  }
  else {

  animNumber++;
  
  clearFields();
  
  if (animNumber < 9){
  
    play();

    let animation = bodymovin.loadAnimation({
      container: document.getElementById("anim" + animNumber),
      rederer: "svg",
      loop: false,
      autoplay: true,
      path: "https://assets3.lottiefiles.com/packages/"+filenames[animNumber-1]   //   path: "https://assets10.lottiefiles.com/packages/lf20_xzIOCI.json"
      });
  
 }  
    else {
      togglePopup()
    }
  }
 }
 





