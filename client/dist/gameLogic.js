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

//needs to modified to account for word and letter multipliers
const wordScore = (str) => {
  let score = 0;
  for (let i = 0; i < str.length; i++) {
    score += letterPoints[str[i]];
  }
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