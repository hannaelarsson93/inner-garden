

 
// function to activate the pop-up
 
function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}

// A function for checking the textarea element for blanks (doesn't work correctly)

// function checkForBlank() {
//     if (document.getElementById("text-field").value == "") {
//         alert("Please write something positive");
//     }
// }


// Create a variable that counts the animations
 
let animNumber = 0;
 
 
// Create a variable that counts the sounds
 
let soundNumber = 0;
 
 
// Create a variable for the different sound files
 
let soundnames =
["falcon.mp3", "sparrow.mp3"];
 
 
// Create a variable for the different endings of the  https: paths to the animations
 
var filenames =
["lf20_l6qkz2hc.json", "lf20_2qussilj.json", "lf20_tzniy9kj.json", "lf20_l6qkz2hc.json", "lf20_van2lrgb.json"];
 
 
// Function that makes the sound of birds when the button is pressed
 
function play(){
 
   soundNumber++;
 
   clearFields();
 
 if (soundNumber < 6){
 
   play();
 
   let audio = new Audio ("falcon.mp3");
   audio.play();
 }
}
 

// Function that clears the field as soon as the Button is pressed

function clearFields() {
  document.getElementById("text-field").value = "";
 }
  
  
 // Function that shows the correct animation
  
 function showAnimation() {
  
  animNumber++;
  
  clearFields();
  
  if (animNumber < 6){
  
    play();
     
    let animation = bodymovin.loadAnimation({
      container: document.getElementById("anim" + animNumber),
      rederer: "svg",
      loop: false,
      autoplay: true,
      path: "https://assets3.lottiefiles.com/packages/"+filenames[animNumber-1]   //   path: "https://assets10.lottiefiles.com/packages/lf20_xzIOCI.json"
      });
  
 }     
 }
 

// Code to randomly place image on the webpage 

// function getRandomPosition(element) {
//   var x = document.body.offsetHeight-element.clientHeight;
//   var y = document.body.offsetWidth-element.clientWidth;
//   var randomX = Math.floor(Math.random()*x);
//   var randomY = Math.floor(Math.random()*y);
//   return [randomX,randomY];
  
// }
// function random(){
//   var image = document.createElement('img');
//   img.setAttribute("style", "position:absolute;");
//   img.setAttribute("src", "https://assets10.lottiefiles.com/packages/lf20_xzIOCI.json");

//   document.body.appendChild(img);
//   var xy = getRandomPosition(img);
//   img.style.top = xy[0] + 'px';
//   img.style.left = xy[1] + 'px';
// }
