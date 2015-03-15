 // U3.W7: Design your own Code Combat Mission

// This is a solo challenge

// Your mission description: You'rea dog and you're owner accidently left you at the park! get home before the evil dog snatchers get you!
// Overall mission: Get home!
// Goals: Evade the evil pound people!
// Characters: Dog, pound people
// Objects: Good guy | bad guys
// Functions: move left/up/down/right , status,

// Pseudocode
//Declare dog that will have starting position and health and will be alive.
//Declare bad guy that will move at random

// Initial Code
// var dogImg = document.getElementById("dog");

// var dog = {
//   health: 1,
//   alive: true,
//   x: 0,
//   y: 150,
//   //attack: false,
//   //timesMoved: 0,

// status: function() {
//   if (dog.x === badGuy.x && dog.y === badGuy.y) {
//     dog.alive = false;
//     console.log("Game over");
//   }
// }, //or do it so tht instead of "dog.alive = false" it detracts 1 point from health
// //use awds to move
// move: function(direction){
//   console.log('moving');
//   if (direction.keyCode === 87) { //direction === 'up'
//     if (dog.y > 0){
//       dog.y -= 50;
//       dogImg.style.top = (dog.y + 'px');
//     }
//   } else if (direction.keyCode === 83){ //direction === down
//     dog.y += 10;
//   } else if (direction === 65){ //direction === left
//     dog.x += 10;
//   } else if (direction === 68){ //direction === right
//     dog.x -= 10;
//   }
//   //this.timesMoved += 1;
//   //badGuy.randomMove()
// }
// };

//How to use a timer?
//Questions about bad guy: How to make many instances, How to make each instance move randomely

// var badGuy = {
//   health: 1,
//   alive: true,
//   attack: true,
//   x: 40,
//   y: 0,
//   badGuyCount: 1,

// //make them move every 1 second?
// randomMove: function() {
//   var direction = Math.floor((Math.random() * 4) + 1);
//   if (direction === 1){
//     this.y += 10
//   } else if (direction === 2){
//     this.y -= 10
//   } else if (direction === 3){
//     this.x -= 10
//   } else if (direction === 4)
//     this.x += 10
//   }
// };

// var bone = {
//   //picking up a bone gives you health + 1

//   //function appear() {
//     //how to make a bone appear after certain time

//   function pickup(player) {
//     player.health += 1
//   }
// };


// Refactored Code
var dogImg = document.getElementById("dog");

var dog = {
  health: 1,
  alive: true,
  x: 0,
  y: 300,
};

function dogCatcher(x, y) {
    this.x = x;
    this.y = y;

};

var person1 = new dogCatcher(100, 0);
var person1Img = document.getElementById("dogcatcher1");
var person2 = new dogCatcher(300, 0);
var person2Img = document.getElementById("dogcatcher2");
var person3 = new dogCatcher(500, 0);
var person3Img = document.getElementById("dogcatcher3");
var person4 = new dogCatcher(700, 0);
var person4Img = document.getElementById("dogcatcher4");
var person5 = new dogCatcher(900, 0);
var person5Img = document.getElementById("dogcatcher5");
var person6 = new dogCatcher(950, 0);
var person6Img = document.getElementById("dogcatcher6");
var person7 = new dogCatcher(100, 300);
var person7Img = document.getElementById("dogcatcher7");
var person8 = new dogCatcher(300, 300);
var person8Img = document.getElementById("dogcatcher8");
var person9 = new dogCatcher(500, 300);
var person9Img = document.getElementById("dogcatcher9");
var person10 = new dogCatcher(700, 300);
var person10Img = document.getElementById("dogcatcher10");
var person11 = new dogCatcher(900, 300);
var person11Img = document.getElementById("dogcatcher11");
var person12 = new dogCatcher(950, 300);
var person12Img = document.getElementById("dogcatcher12");
var person13 = new dogCatcher(100, 450);
var person13Img = document.getElementById("dogcatcher13");
var person14 = new dogCatcher(300, 450);
var person14Img = document.getElementById("dogcatcher14");
var person15 = new dogCatcher(500, 450);
var person15Img = document.getElementById("dogcatcher15");
var person16 = new dogCatcher(700, 450);
var person16Img = document.getElementById("dogcatcher16");
var person17 = new dogCatcher(900, 450);
var person17Img = document.getElementById("dogcatcher17");
var person18 = new dogCatcher(950, 0);
var person18Img = document.getElementById("dogcatcher18");
// var person19 = new dogCatcher(100, 0);
// var person19Img = document.getElementById("dogcatcher19");
// var person20 = new dogCatcher(100, 0);
// var person20Img = document.getElementById("dogcatcher20");



function move(direction){
  console.log('moving');
  randomMove(person1, person1Img);
  randomMove(person2, person2Img);
  randomMove(person3, person3Img);
  randomMove(person4, person4Img);
  randomMove(person5, person5Img);
  randomMove(person6, person6Img);
  randomMove(person7, person7Img);
  randomMove(person8, person8Img);
  randomMove(person9, person9Img);
  randomMove(person10, person10Img);
  randomMove(person11, person11Img);
  randomMove(person12, person12Img);
  randomMove(person13, person13Img);
  randomMove(person14, person14Img);
  randomMove(person15, person15Img);
  randomMove(person16, person16Img);
  randomMove(person17, person17Img);
  randomMove(person18, person18Img);

  if (direction.keyCode === 87) { //direction === 'up'
    if (dog.y > 0){
      dog.y -= 50;
      dogImg.style.top = (dog.y + 'px');
      }
    } else if (direction.keyCode === 83){
      if (dog.y < 550){
      dog.y += 50;
      dogImg.style.top = (dog.y + 'px');
      }
    } else if (direction.keyCode === 68){
      if ((dog.y === 150 && dog.x < 1000) || (dog.x < 950)){
        dog.x += 50
        dogImg.style.left = (dog.x + 'px')
      }
    } else if (direction.keyCode === 65){
      if (dog.x > 0){
        dog.x -= 50
        dogImg.style.left = (dog.x + 'px')
      }
    }
    home()
    caught()
};

function randomMove(catcher, catcherImg){
 var direction = Math.floor((Math.random() * 4) + 1);
  if (direction === 1 && catcher.y > 0){
    catcher.y -= 50
    catcherImg.style.top = (catcher.y + 'px')
  } else if (direction === 2 && catcher.y < 550){
    catcher.y += 50
    catcherImg.style.top = (catcher.y + 'px')
  } else if (direction === 3 && catcher.x > 0){
    catcher.x -= 50
    catcherImg.style.left = (catcher.x + 'px')
  } else if (direction === 4 && catcher.x < 950){
    catcher.x += 50
    catcherImg.style.left = (catcher.x + 'px')
  }
};

function home(){
  if (dog.y === 150 && dog.x === 1000){
    alert('Congratulations! You evaded the evil dog catchers and made it home safe! Time to enjoy a nice bone.')
  }
};

var array_of_catchers = [person1, person2, person3, person4, person5, person6, person7, person8, person9, person10, person11, person12, person13, person14, person15, person16, person17, person18];

function caught(){
  for (var i=0; i<array_of_catchers.length; i++) {
    var catcher = array_of_catchers[i];
    if (catcher.x === dog.x && catcher.y === dog.y){
      alert('You\'ve been caught! Off to the pound you go!')
      //some type of game over animation
    }
  }
};

document.onkeydown = move;

//refactor #2

//function dogCatcher(x, y)






// Reflection
//This was a tough challenge and I learned a lot and am still confused on quite a bit. Is there no iteration in Javascript.  I was completely stuck on how to make 18 different dog catchers without having to manually type out the variables for each one.  I tried a few different ideas but none worked.  I'll search google more but I already spent several hours on this challenge. I also want to learn some new things to do with the dog when he gets caught. Specifically, I want the whole screen to turn into a picture of a dog in a net.  Not sure how to do this but will update soon!
//
//
//
//
//
//
//
