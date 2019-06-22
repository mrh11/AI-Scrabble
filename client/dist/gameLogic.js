let scrabbleBag = [
  "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "A", "I", "A", "I", "A", "I", "A", "I",
 "A", "I", "A", "I", "A", "I", "A", "I", "A", "I", "O", "O", "O", "O", "O", "O", "O", "O", "N", "R",
 "T", "N", "R", "T", "N", "R", "T", "N", "R", "T", "N", "R", "T", "N", "R", "T", "L", "S", "U", "D",
 "L", "S", "U", "D", "L", "S", "U", "D", "L", "S", "U", "D", "G", "G", "G", "B", "C", "M", "P", "F",
 "H", "V", "W", "Y", "B", "C", "M", "P", "F", "H", "V", "W", "Y", "K", "J", "X", "Q", "Z", "BLANK", "BLANK"
];

const letterPoints = {
  'BLANK': 0,
  'A': 1,  'E': 1,  'I': 1,  'L': 1,  'N': 1,  'R': 1,  'S': 1,  'T': 1,  'U': 1,
  'B': 2,  'D': 2,  'O': 2,  'G': 2,
  'C': 3,  'M': 3,  'P': 3,
  'F': 4,  'H': 4,  'V': 4,  'W': 4,  'Y': 4,
  'K': 5,
  'J': 8,  'X': 8,
  'Q': 10, 'Z': 10
}

//keys will be 2 character strings of coordinates x and y => 'xy'
const bonusTaken = { 
}

const shuffleScrabbleBag = (arr) => {
  //fischer-yates algorithm
  for (let i = 99; i > 0; i--) {
    let j = Math.floor(Math.random()*(i+1));
    let temp = arr[i];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

const wordScore = (str, startCoors, endCoors) => {
  let score = 0;
  let wordMultiplier = 1;
  //check if characters are traveling horizontally or vertically
    //if horizontal 
      //for start x coor to end x coor
        //define test var 
        //prioritize y tests, 
          //if any pass assign test, check object if piece is taken
          //add bonus to word count 
    //if vertical
      //for start y to end y
        //prioritize x tests
          //if any pass assign test, check object if piece is take
            //if true add bonus to word count
      let x = startCoors[0];
      let y;
      let length = endCoors[1] - startCoors[1];
      for (let i = 0; i <= length; i++) {
       
       
       
       
        y = startCoors[1] + i;
        if (x % 7 === 0) {
          if (y % 7 === 0) {
            if (y !== 7 && x !== 7) {
              wordMultiplier = 3;
            }
          } else if (y === 3 || y === 11) {
            //letter score is doubled;
          }
        } else if ((startCoors[1] >= 1 && x <= 4) || (x >= 10 && x <= 13)) {
          if(startCoors[1+i] === startCoors[0]) {
            wordMultiplier = 2;
          } else if (startCoors[1+i] === -startCoors[0]+14) {
            wordMultiplier = 2;
          }
        } 
      }


  // let score = 0;
  // for (let i = 0; i < str.length; i++) {
  //   score += letterPoints[str[i]];
  // }
  return score;
}

const Board = (size) => {
  this.size = size;
  this.board = this.create_board(size);
}

Board.prototype.create_board = (size) => {
  let m = [
    ['','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','']
  ];
  return m;
}

const preventBoardOverwrite = (board, x_pos, y_pos, letter) => {
  if (board[y_pos][x_pos] === '') board[y_pos][x_pos] === letter;
  else console.log('Invalid Move');
}

//notes:
//if position at x and position at y % 7 === 0 and x !== 7 and x !== y, multiplier = 3
//if position at x % 7 and y = 3 or 11
//if position at y % 7 and x = 3 or 11

//if position at x-1 % 4 = 0 && 0 < x <= 9 and position at y is 1 or 13, triple the letter
//if position at x-1 % 4 = 0 && y-1 % 4 === 0 && 5 <= y <= 9, triple the letter

//if position at x = position at y and x is between 1,4 inclusive or 10,13 inclusive, double the word
//if position at y is at -x + 14 and x is between 1,4 inclusive or 10,13 inclusive double the word


//wrap the below in a constraint on x
//if x_pos = 2 and y = 6 or 8
//if x_pos = 6 and y = 2 or 6 or 8 or 12
//if x_pos = 8 and y = 2 or 6 of 8 of 12
//if x_pos = 12 and y = 6 or 8







//may not need this code here:
// const letterFrequency = {
//   'K': 1,  'J': 1,  'X': 1,  'Q': 1,  'Z': 1,
//   'BLANK': 2,  'B': 2,  'C': 2,  'M': 2,  'P': 2,  'F': 2,  'H': 2,  'V': 2,  'W': 2,  'Y': 2,
//   'G': 3,
//   'L': 4,  'S': 4,  'U': 4,  'D': 4,
//   'N': 6,  'R': 6,  'T': 6,
//   'O': 8,
//   'A': 9,  'I': 9,
//   'E': 12
// }