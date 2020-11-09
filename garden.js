
 
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
["lf20_l6qkz2hc.json", "lf20_2qussilj.json", "lf20_tzniy9kj.json", "lf20_tzniy9kj.json", "lf20_van2lrgb.json", "lf20_van2lrgb.json", "lf20_l6qkz2hc.json", "lf20_2qussilj.json"];


 
// Function that makes the sound of birds when the button is pressed
function play(){
  soundNumber++;
  soundNumber = 1;
  clearFields();
 
 if (soundNumber == 1){
  
  let audio = new Audio ("xxxx.mp3");
  audio.play();

 
  } if(soundNumber == 2) {
 
   let audio = new Audio ("xxxx.mp3");
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
  
  if (animNumber < 9){
  
    play();

    let animation = bodymovin.loadAnimation({
      container: document.getElementById("anim" + animNumber),
      rederer: "svg",
      loop: false,
      autoplay: true,
      path: "https://assets3.lottiefiles.com/packages/"+filenames[animNumber-1]   //   path: "https://assets10.lottiefiles.com/packages/lf20_xzIOCI.json"
      });
  
 }  else {
  togglePopup()
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






// Cool script that makes flowers rain down on click (removes the water pot as a lick icon  though..)

// function randNum(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// _ = self.Flower = function(opts){
//   this.left = opts.left;
//   this.top = opts.top;
//   this.size = randNum(1.5, 6);
//   this.drawFlower();
// }
// _.prototype = {
//   spinFlower: function(el){
//     var r = 0;
//     var spd = Math.random() * (3 - 0.05) + 0.05;
//     (function spin() {
//       if (r === 350){
//         r = 0
//       } else {
//         r += spd
//       }
//       el.style.transform = 'rotate('+r+'deg)';
//       requestAnimationFrame(spin);
//     })();
//   },
//   fall: function(el){
//     var _this = this;
//     var max_right = _this.left + randNum(20, 50);
//     var max_left = _this.left - randNum(20, 50);
//     var dir_i = randNum(0,1);
//     var directions = ['left', 'right'];
//     var direction = directions[dir_i];
//     (function fall() {
//       if (_this.left === max_left){
//         direction = 'right';
//         max_left= _this.left - randNum(20, 50);
//       }
//       if (_this.left === max_right){
//         direction = 'left';
//         max_right = _this.left + randNum(20, 50);
//       }
//       if (direction === 'left'){
//         _this.left -= 1
//       } else {
//         _this.left += 1
//       }
//       _this.top += 2;
//       el.style.top = _this.top + 'px';
//       el.style.left = _this.left + 'px';
//       requestAnimationFrame(fall);
//     })();
//   },
//   fadeOut: function(el){
//     el.style.opacity = 1;

//     (function fade() {
//       if ((el.style.opacity -= .007) < 0) {
//         el.parentNode.removeChild(el);
//       } else {
//         requestAnimationFrame(fade);
//       }
//     })();
//   },
//   get petal (){
//     var petal = document.createElement('div');
//     petal.style.userSelect = 'none';
//     petal.style.position = 'absolute';
//     petal.style.background = 'radial-gradient(white 10%, pink 70%)';
//     petal.style.backgroundSize = this.size+'vmin';
//     petal.style.backgroundPosition = '-'+this.size/2+'vmin 0';
//     petal.style.width = petal.style.height = this.size/2+'vmin';
//     petal.style.borderTopLeftRadius = petal.style.borderBottomRightRadius = (42.5 * this.size) / 100 + "vmin";
//     return petal;
//   },
//   get petal_styles(){
//     return [
//       {
//         transform: 'rotate(-47deg)',
//         left: '50%',
//         marginLeft: '-'+this.size/4+'vmin',
//         top: 0
//       },{
//         transform: 'rotate(15deg)',
//         left: '100%',
//         marginLeft: '-'+(this.size * 39 /100)+'vmin',
//         top: (this.size * 17.5) / 100 + 'vmin'
//       },{
//         transform: 'rotate(93deg)',
//         left: '100%',
//         marginLeft: '-'+(this.size * 51) / 100+'vmin',
//         top: (this.size * 58) / 100 + 'vmin'
//       },{
//         transform: 'rotate(175deg)',
//         left: '0%',
//         marginLeft: (this.size * 5) / 100 +'vmin',
//         top: (this.size * 58) / 100 + 'vmin'
//       },{
//         transform: 'rotate(250deg)',
//         left: '0%',
//         marginLeft: -(this.size * 8) / 100 +'vmin',
//         top: (this.size * 17.5) / 100 + 'vmin'
//       }
//     ]
//   },
//   get flower(){
//     var flower = document.createElement('div');
//     flower.style.userSelect = 'none';
//     flower.style.position = 'absolute';
//     flower.style.left = this.left + 'px';
//     flower.style.top = this.top + 'px';
//     flower.style.width = this.size + 'vmin';
//     flower.style.height = this.size + 'vmin';
//     for (var i = 0; i < 5; i++){
//       var petal = this.petal;
//       // var styles = this.petal_styles[i];
//       petal.style.transform = this.petal_styles[i]['transform'];
//       petal.style.top = this.petal_styles[i]['top'];
//       petal.style.left = this.petal_styles[i]['left'];
//       petal.style.marginLeft = this.petal_styles[i]['marginLeft'];
//       flower.appendChild(petal);
//     }
//     this.fadeOut(flower);
//     this.spinFlower(flower);
//     this.fall(flower);
//     return flower;
//   },
//   drawFlower: function(){
//     document.body.appendChild(this.flower);
//   }
// }

// window.addEventListener('mousedown', function(e){
//   var amt = randNum(1, 5);
//   for (var i = 0; i < amt; i++){
//     var top = randNum(e.clientY - 30, e.clientY + 30);
//     var left = randNum(e.clientX - 30, e.clientX + 10);
//     var flower = new Flower({
//       top: top,
//       left: left
//     });
//   }
// });