function Game(string) {
  this.string = generateString()
  this.board = this.makeBoard()
}

var generateString = function() {
  var string = '0000000000000000'
  var randNum = Math.floor((Math.random() * 15) + 2)
  var output = [string.slice(0, randNum-1), 2, string.slice(randNum)].join('')
  return output
}

Game.prototype.makeBoard = function() {
  this.row1 = []
  this.row2 = []
  this.row3 = []
  this.row4 = []
  var nestArray = [this.row1, this.row2, this.row3, this.row4]
  for (var i = 0; i <= this.string.length - 1; i++) {
    if (i < 4 ) {
      this.row1.push(this.string[i])
    }  else if (i < 8) {
      this.row2.push(this.string[i])
    } else if (i < 12) {
      this.row3.push(this.string[i])
    } else {
      this.row4.push(this.string[i])
    }
  };
  return nestArray
}

Game.prototype.toString = function() {
  for (var i = 0; i < this.board.length; i++) {
    console.log(this.board[i].join(' '))
  };
}

Game.prototype.toHtml = function() {
  var string = "<table id='board'>"
  for (var x=0; x<this.board.length; x++){
    string += "<tr class='row'>"
    for (var y=0; y<this.board.length;y++){
      var num = ""
      if (this.board[x][y] != 0) {
        num = this.board[x][y]
      }
      string += "<td class='cell " + numToWords[num] + "'>" + num + "</td>"
    };
    string += "</tr>"
  };
  string += "</table>"
  return string
}

var spawnBlock = function(board) {
  var nums = [2,4]
  var ranDigit = Math.floor(Math.random()*4)
  var ranDigitTwo = Math.floor(Math.random()*4)
  if (board[ranDigit][ranDigitTwo] == 0) {
    board[ranDigit][ranDigitTwo] = nums[Math.floor(Math.random()*2)]
  } else {
    spawnBlock(board)
  }
}

Game.prototype.move = function(dir) {
  var self = this
  switch(dir) {
    case 'up':
      var transposedBoard = _.zip(self.board[0], self.board[1], self.board[2], self.board[3])
      var newBoard = shiftBoard(transposedBoard, "right")
      var oldBoard = this.board
      this.board = _.zip(newBoard[0], newBoard[1], newBoard[2], newBoard[3])
      if (oldBoard.join('') !== this.board.join('')) {spawnBlock(this.board)};
      break;
    case 'down':
      var transposedBoard = _.zip(self.board[0], self.board[1], self.board[2], self.board[3])
      var newBoard = shiftBoard(transposedBoard, "left")
      var oldBoard = this.board
      this.board = _.zip(newBoard[0], newBoard[1], newBoard[2], newBoard[3])
      if (oldBoard.join('') !== this.board.join('')) {spawnBlock(this.board)};
      break;
    case 'right':
      var oldBoard = this.board
      this.board = shiftBoard(this.board, "left")
      if (oldBoard.join('') !== this.board.join('')) {spawnBlock(this.board)};
      break;
    case 'left':
      var oldBoard = this.board
      this.board = shiftBoard(this.board, "right")
      if (oldBoard.join('') !== this.board.join('')) {spawnBlock(this.board)};
      break;
  }
}

var findAndCombineNumbers = function(row, dir){
  var newRow = row.filter(function(x) { return x != 0; })
  if (dir === "left") {newRow = newRow.reverse()}
  for (var z = 0; z <= newRow.length; z++) {
    if (newRow[z+1] && newRow[z] == newRow[z+1]) {
      newRow[z+1] *= 2
      adjustScore(newRow[z+1])
      newRow.splice(z, 1)
    }
  }
  if (dir === "left") {newRow = newRow.reverse()}
  return newRow
}

var adjustScore = function(num) {
  var score = parseInt($('#scoreboard').text())
  var newScore = score + num
  $('#scoreboard').html(newScore)
}

var addZeroes = function(row, dir) {
  if (dir === "right") {
    while (row.length < 4) {row.push(0)}
  } else if (dir === "left") {
    while (row.length < 4) {row.unshift(0)}
  }
  return row
}

var shiftBoard = function(board, dir) {
  var noZeroBoard = []
  for (var x = 0; x < board.length; x++) {
    var noZeros = findAndCombineNumbers(board[x], dir)
    noZeroBoard.push(addZeroes(noZeros, dir))
  }
  return noZeroBoard
}

var numToWords = {2: "two", 4: "four", 8: "eight", 16: "sixteen", 32: "thirty-two", 64: "sixty-four", 128: "one-two-eight", 256: "two-five-six", 512: "five-one-two", 1024: "ten-two-four", 2048: "twenty"}