
function Dog(x,y,img) {
  this.x = x;
  this.y = y;
  this.img = document.getElementById("dog");
}
Dog.prototype = {
  constructor: DogCatcher,
  home: function(){
    if (this.y === 150 && this.x === 1000){
      alert('Congratulations! You evaded the evil dog catchers and made it home safe! Time to enjoy a nice bone.')
    }
  },
  caught: function(catchers){
    for (var i=0; i<dogCatcherArray.length; i++) {
      var catcher = dogCatcherArray[i];
      if (catcher.x === dog.x && catcher.y === dog.y){
        alert('You\'ve been caught! Off to the pound you go!')
        //some type of game over animation
      }
    }
  }
}

function DogCatcher(x, y, id) {
    this.x = x;
    this.y = y;
    this.img = document.getElementById(id)
};
DogCatcher.prototype = {
  constructor: DogCatcher,
  randomMove: function(){
  var direction = Math.floor((Math.random() * 4) + 1);
  if (direction === 1 && this.y > 0){
    this.y -= 50
    this.img.style.top = (this.y + 'px')
  } else if (direction === 2 && this.y < 550){
    this.y += 50
    this.img.style.top = (this.y + 'px')
  } else if (direction === 3 && this.x > 0){
    this.x -= 50
    this.img.style.left = (this.x + 'px')
  } else if (direction === 4 && this.x < 950){
    this.x += 50
    this.img.style.left = (this.x + 'px')
  }
}
}

function Game(dogx, dogy){
  this.catchers = this.getDogCatchers();
  this.dog = new Dog(dogx, dogy, document.getElementById("dog"))
}

Game.prototype = {
  constructor: Game,
  getDogCatchers: function(){
    var dogCatcherArray = []
    var x = 100
    var y = 0
    for (var i = 0; i < 18; i++) {
      var num = i + 1
      var id = "dogcatcher" + num
      var person = new DogCatcher((x+=200)%1000, parseInt(i/6)*300, id)
      dogCatcherArray.push(person)
    };
    return dogCatcherArray
  },
  move: function(direction) {
    var self = this
    console.log(this)
    this.catchers.forEach(function(person) {
      person.randomMove()
    })
    if (direction.keyCode === 87) { //direction === 'up'
      if (self.dog.y > 0){
        self.dog.y -= 50;
        self.dog.img.style.top = (self.dog.y + 'px');
        }
      } else if (direction.keyCode === 83){
        if (self.dog.y < 550){
        self.dog.y += 50;
        self.dog.img.style.top = (self.dog.y + 'px');
        }
      } else if (direction.keyCode === 68){
        if ((self.dog.y === 150 && self.dog.x < 1000) || (self.dog.x < 950)){
          self.dog.x += 50
          self.dog.img.style.left = (self.dog.x + 'px')
        }
      } else if (direction.keyCode === 65){
        if (self.dog.x > 0){
          self.dog.x -= 50
          self.dog.img.style.left = (self.dog.x + 'px')
        }
      }
      self.home()
      self.caught()
  },
  home: function(){
    if (this.dog.y === 150 && this.dog.x === 1000){
      alert('Congratulations! You evaded the evil dog catchers and made it home safe! Time to enjoy a nice bone.')
    }
  },
  caught: function(catchers){
    for (var i=0; i<this.catchers.length; i++) {
      var catcher = this.catchers[i];
      if (catcher.x === this.dog.x && catcher.y === this.dog.y){
        alert('You\'ve been caught! Off to the pound you go!')
        //some type of game over animation
      }
    }
  }
}

game = new Game(0,300)
document.onkeydown = game.move.bind(game);
