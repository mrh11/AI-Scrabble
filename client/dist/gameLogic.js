
let scrabbleBag = [
    "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "A", "I", "A", "I", "A", "I", "A", "I",
   "A", "I", "A", "I", "A", "I", "A", "I", "A", "I", "O", "O", "O", "O", "O", "O", "O", "O", "N", "R",
   "T", "N", "R", "T", "N", "R", "T", "N", "R", "T", "N", "R", "T", "N", "R", "T", "L", "S", "U", "D",
   "L", "S", "U", "D", "L", "S", "U", "D", "L", "S", "U", "D", "G", "G", "G", "B", "C", "M", "P", "F",
   "H", "V", "W", "Y", "B", "C", "M", "P", "F", "H", "V", "W", "Y", "K", "J", "X", "Q", "Z", "BLANK", "BLANK"
];

const shuffleScrabbleBag = (array) => {
    var m = array.length;
    var t;
    var i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  };

const letterPoints = {
    'BLANK': 0,
    'A': 1,  'E': 1,  'I': 1,  'L': 1,  'N': 1,  'R': 1,  'S': 1,  'T': 1,  'U': 1,
    'B': 2,  'D': 2,  'O': 2,  'G': 2,
    'C': 3,  'M': 3,  'P': 3,
    'F': 4,  'H': 4,  'V': 4,  'W': 4,  'Y': 4,
    'K': 5,
    'J': 8,  'X': 8,
    'Q': 10, 'Z': 10
  };

const letterImages = {
    'BLANK': 'https://scrabblehrnyc22.s3.amazonaws.com/BLANK.png', 'A': 'https://scrabblehrnyc22.s3.amazonaws.com/A-1.png',
    'E': 'https://scrabblehrnyc22.s3.amazonaws.com/E-1.png',       'I': 'https://scrabblehrnyc22.s3.amazonaws.com/I-1.png',  
    'L': 'https://scrabblehrnyc22.s3.amazonaws.com/L-1.png',       'N': 'https://scrabblehrnyc22.s3.amazonaws.com/N-1.png',  
    'R': 'https://scrabblehrnyc22.s3.amazonaws.com/R-1.png',       'S': 'https://scrabblehrnyc22.s3.amazonaws.com/S-1.png',  
    'T': 'https://scrabblehrnyc22.s3.amazonaws.com/T-1.png',       'U': 'https://scrabblehrnyc22.s3.amazonaws.com/U-1.png',
    'B': 'https://scrabblehrnyc22.s3.amazonaws.com/B-2.png',       'D': 'https://scrabblehrnyc22.s3.amazonaws.com/D-2.png',  
    'O': 'https://scrabblehrnyc22.s3.amazonaws.com/O-2.png',       'G': 'https://scrabblehrnyc22.s3.amazonaws.com/G-2.png',
    'C': 'https://scrabblehrnyc22.s3.amazonaws.com/C-3.png',       'M': 'https://scrabblehrnyc22.s3.amazonaws.com/M-3.png',  
    'P': 'https://scrabblehrnyc22.s3.amazonaws.com/P-3.png',       'F': 'https://scrabblehrnyc22.s3.amazonaws.com/F-4.png',  
    'H': 'https://scrabblehrnyc22.s3.amazonaws.com/H-4.png',       'V': 'https://scrabblehrnyc22.s3.amazonaws.com/V-4.png',  
    'W': 'https://scrabblehrnyc22.s3.amazonaws.com/W-4.png',       'Y': 'https://scrabblehrnyc22.s3.amazonaws.com/Y-4.png',
    'K': 'https://scrabblehrnyc22.s3.amazonaws.com/K-5.png',       'J': 'https://scrabblehrnyc22.s3.amazonaws.com/J-4.png',  
    'X': 'https://scrabblehrnyc22.s3.amazonaws.com/X-8.png',       'Q': 'https://scrabblehrnyc22.s3.amazonaws.com/Q-10.png',     
    'Z': 'https://scrabblehrnyc22.s3.amazonaws.com/Z-10.png'
  };

const bonusTile = {
    '00-00' : {'type' : 'wordMultiplier', 'value': 3}, '14-00' : {'type' : 'wordMultiplier', 'value': 3}, '01-01' : {'type' : 'wordMultiplier', 'value': 3}, '14-07' : {'type' : 'wordMultiplier', 'value': 3},  
    '00-14' : {'type' : 'wordMultiplier', 'value': 3}, '07-14' : {'type' : 'wordMultiplier', 'value': 3}, '14-14' : {'type' : 'wordMultiplier', 'value': 3}, '00-07' : {'type' : 'wordMultiplier', 'value': 3},
      
    '13-01' : {'type' : 'wordMultiplier', 'value': 2}, '02-02' : {'type' : 'wordMultiplier', 'value': 2}, '12-02' : {'type' : 'wordMultiplier', 'value': 2}, '03-03' : {'type' : 'wordMultiplier', 'value': 2}, 
    '11-03' : {'type' : 'wordMultiplier', 'value': 2}, '04-04' : {'type' : 'wordMultiplier', 'value': 2}, '04-04' : {'type' : 'wordMultiplier', 'value': 2}, '10-04' : {'type' : 'wordMultiplier', 'value': 2},
    '04-10' : {'type' : 'wordMultiplier', 'value': 2}, '10-10' : {'type' : 'wordMultiplier', 'value': 2}, '03-11' : {'type' : 'wordMultiplier', 'value': 2}, '11-11' : {'type' : 'wordMultiplier', 'value': 2},
    '02-12' : {'type' : 'wordMultiplier', 'value': 2}, '12-12' : {'type' : 'wordMultiplier', 'value': 2}, '01-13' : {'type' : 'wordMultiplier', 'value': 2}, '13-13' : {'type' : 'wordMultiplier', 'value': 2},
      
    '03-00' : {'type' : 'letterMultiplier', 'value': 2}, '11-00' : {'type' : 'letterMultiplier', 'value': 2}, '06-02' : {'type' : 'letterMultiplier', 'value': 2}, '08-02' : {'type' : 'letterMultiplier', 'value': 2}, 
    '00-03' : {'type' : 'letterMultiplier', 'value': 2}, '07-03' : {'type' : 'letterMultiplier', 'value': 2}, '14-03' : {'type' : 'letterMultiplier', 'value': 2}, '02-06' : {'type' : 'letterMultiplier', 'value': 2},
    '06-06' : {'type' : 'letterMultiplier', 'value': 2}, '08-06' : {'type' : 'letterMultiplier', 'value': 2}, '12-06' : {'type' : 'letterMultiplier', 'value': 2}, '03-07' : {'type' : 'letterMultiplier', 'value': 2},
    '11-07' : {'type' : 'letterMultiplier', 'value': 2}, '02-08' : {'type' : 'letterMultiplier', 'value': 2}, '06-08' : {'type' : 'letterMultiplier', 'value': 2}, '08-08' : {'type' : 'letterMultiplier', 'value': 2}, 
    '00-11' : {'type' : 'letterMultiplier', 'value': 2}, '07-11' : {'type' : 'letterMultiplier', 'value': 2}, '14-11' : {'type' : 'letterMultiplier', 'value': 2}, '06-12' : {'type' : 'letterMultiplier', 'value': 2},
    '03-14' : {'type' : 'letterMultiplier', 'value': 2}, '11-14' : {'type' : 'letterMultiplier', 'value': 2}, '12-08' : {'type' : 'letterMultiplier', 'value': 2}, '08-12' : {'type' : 'letterMultiplier', 'value': 2},
      
    '05-01' : { 'type' : 'letterMultiplier', 'value': 3}, '09-01' : { 'type' : 'letterMultiplier', 'value': 3},'01-05' : { 'type' : 'letterMultiplier', 'value': 3}, '05-05' : { 'type' : 'letterMultiplier', 'value': 3},
    '09-05' : { 'type' : 'letterMultiplier', 'value': 3}, '13-05' : { 'type' : 'letterMultiplier', 'value': 3},'01-09' : { 'type' : 'letterMultiplier', 'value': 3}, '05-09' : { 'type' : 'letterMultiplier', 'value': 3},
    '09-09' : { 'type' : 'letterMultiplier', 'value': 3}, '13-09' : { 'type' : 'letterMultiplier', 'value': 3},'05-13' : { 'type' : 'letterMultiplier', 'value': 3}, '09-13' : { 'type' : 'letterMultiplier', 'value': 3},
  };

const wordScore = (strOfLetters, startCoors, endCoors) => {
      let score = 0;
      let wordMultiplier = 1;
    
      let traversingVertically = false;
      if (Number(endCoors.slice(0,2))-Number(startCoors.slice(0,2)) === 0) {
        traversingVertically = true;
      }
    
      for (let i = 0; i < strOfLetters.length; i++) {
        let letterMultiplier = 1;
    
        let currentCoor;
        if (traversingVertically) {
    
          let prefix = startCoors.slice(0,3);
          let suffix = (Number(startCoors.slice(3,5)+i)).toString();
          (Number(startCoors.slice(3,5)) + i < 10) ? currentCoor = prefix + '0' + suffix : currentCoor = prefix + suffix 
    
        } else {
    
          let prefix = (Number(startCoors.slice(0,2))+i).toString();
          let suffix = startCoors.slice(2,5);
          (Number(startCoors.slice(0,2)) + i < 10) ? currentCoor = '0' + prefix + suffix : currentCoor = prefix + suffix
    
        }
    
        if (bonusTile[currentCoor] && bonusTile[currentCoor].type === 'wordMultiplier') {
          wordMultiplier *= bonusTile[currentCoor].value;
        } else if (bonusTile[currentCoor] && bonusTile[currentCoor].type === 'letterMultiplier') {
          letterMultiplier = bonusTile[currentCoor].value;
        }
        score += letterPoints[strOfLetters[i]]*letterMultiplier;
      }
      score *= wordMultiplier;
      return score;
    };

window.scrabbleBag = scrabbleBag;
window.shuffleScrabbleBag = shuffleScrabbleBag;
window.letterPoints = letterPoints;
window.letterImages = letterImages;
window.bonusTile = bonusTile;
window.wordScore = wordScore;






















// var Board = () => {
//   this.size = 15;
//   this.board = this.create_board();
//   this.scrabbleBag = [
//     "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "A", "I", "A", "I", "A", "I", "A", "I",
//    "A", "I", "A", "I", "A", "I", "A", "I", "A", "I", "O", "O", "O", "O", "O", "O", "O", "O", "N", "R",
//    "T", "N", "R", "T", "N", "R", "T", "N", "R", "T", "N", "R", "T", "N", "R", "T", "L", "S", "U", "D",
//    "L", "S", "U", "D", "L", "S", "U", "D", "L", "S", "U", "D", "G", "G", "G", "B", "C", "M", "P", "F",
//    "H", "V", "W", "Y", "B", "C", "M", "P", "F", "H", "V", "W", "Y", "K", "J", "X", "Q", "Z", "BLANK", "BLANK"
//   ];
//   this.letterPoints = {
//     'BLANK': 0,
//     'A': 1,  'E': 1,  'I': 1,  'L': 1,  'N': 1,  'R': 1,  'S': 1,  'T': 1,  'U': 1,
//     'B': 2,  'D': 2,  'O': 2,  'G': 2,
//     'C': 3,  'M': 3,  'P': 3,
//     'F': 4,  'H': 4,  'V': 4,  'W': 4,  'Y': 4,
//     'K': 5,
//     'J': 8,  'X': 8,
//     'Q': 10, 'Z': 10
//   };
//   this.word3MultObj = {'type' : 'wordMultiplier', 'value': 3};
//   this.word2MultObj = {'type' : 'wordMultiplier', 'value': 2};
//   this.lett3MultObj = { 'type' : 'letterMultiplier', 'value': 3};
//   this.lett2MultObj = {'type' : 'letterMultiplier', 'value': 2};
//   this.bonusTile = {
//     '00-00' : word3MultObj, '14-00' : word3MultObj, '01-01' : word3MultObj, '14-07' : word3MultObj,  
//     '00-14' : word3MultObj, '07-14' : word3MultObj, '14-14' : word3MultObj, '00-07' : word3MultObj,
  
//     '13-01' : word2MultObj, '02-02' : word2MultObj, '12-02' : word2MultObj, '03-03' : word2MultObj, 
//     '11-03' : word2MultObj, '04-04' : word2MultObj, '04-04' : word2MultObj, '10-04' : word2MultObj,
//     '04-10' : word2MultObj, '10-10' : word2MultObj, '03-11' : word2MultObj, '11-11' : word2MultObj,
//     '02-12' : word2MultObj, '12-12' : word2MultObj, '01-13' : word2MultObj, '13-13' : word2MultObj,
  
//     '03-00' : lett2MultObj, '11-00' : lett2MultObj, '06-02' : lett2MultObj, '08-02' : lett2MultObj, 
//     '00-03' : lett2MultObj, '07-03' : lett2MultObj, '14-03' : lett2MultObj, '02-06' : lett2MultObj,
//     '06-06' : lett2MultObj, '08-06' : lett2MultObj, '12-06' : lett2MultObj, '03-07' : lett2MultObj,
//     '11-07' : lett2MultObj, '02-08' : lett2MultObj, '06-08' : lett2MultObj, '08-08' : lett2MultObj, 
//     '00-11' : lett2MultObj, '07-11' : lett2MultObj, '14-11' : lett2MultObj, '06-12' : lett2MultObj,
//     '03-14' : lett2MultObj, '11-14' : lett2MultObj, '12-08' : lett2MultObj, '08-12' : lett2MultObj,
  
//     '05-01' : lett3MultObj, '09-01' : lett3MultObj,'01-05' : lett3MultObj, '05-05' : lett3MultObj,
//     '09-05' : lett3MultObj, '13-05' : lett3MultObj,'01-09' : lett3MultObj, '05-09' : lett3MultObj,
//     '09-09' : lett3MultObj, '13-09' : lett3MultObj,'05-13' : lett3MultObj, '09-13' : lett3MultObj,
//   }
  // this.grid = [
  //   ['00-00','01-00','02-00','03-00','04-00','05-00','06-00','07-00','08-00','09-00','10-00','11-00','12-00','13-00','14-00'],
  //   ['00-01','01-01','02-01','03-01','04-01','05-01','06-01','07-01','08-01','09-01','10-01','11-01','12-01','13-01','14-01'],
  //   ['00-02','01-02','02-02','03-02','04-02','05-02','06-02','07-02','08-02','09-02','10-02','11-02','12-02','13-02','14-02'],
  //   ['00-03','01-03','02-03','03-03','04-03','05-03','06-03','07-03','08-03','09-03','10-03','11-03','12-03','13-03','14-03'],
  //   ['00-04','01-04','02-04','03-04','04-04','05-04','06-04','07-04','08-04','09-04','10-04','11-04','12-04','13-04','14-04'],
  //   ['00-05','01-05','02-05','03-05','04-05','05-05','06-05','07-05','08-05','09-05','10-05','11-05','12-05','13-05','14-05'],
  //   ['00-06','01-06','02-06','03-06','04-06','05-06','06-06','07-06','08-06','09-06','10-06','11-06','12-06','13-06','14-06'],
  //   ['00-07','01-07','02-07','03-07','04-07','05-07','06-07','07-07','08-07','09-07','10-07','11-07','12-07','13-07','14-07'],
  //   ['00-08','01-08','02-08','03-08','04-08','05-08','06-08','07-08','08-08','09-08','10-08','11-08','12-08','13-08','14-08'],
  //   ['00-09','01-09','02-09','03-09','04-09','05-09','06-09','07-09','08-09','09-09','10-09','11-09','12-09','13-09','14-09'],
  //   ['00-10','01-10','02-10','03-10','04-10','05-10','06-10','07-10','08-10','09-10','10-10','11-10','12-10','13-10','14-10'],
  //   ['00-11','01-11','02-11','03-11','04-11','05-11','06-11','07-11','08-11','09-11','10-11','11-11','12-11','13-11','14-11'],
  //   ['00-12','01-12','02-12','03-12','04-12','05-12','06-12','07-12','08-12','09-12','10-12','11-12','12-12','13-12','14-12'],
  //   ['00-13','01-13','02-13','03-13','04-13','05-13','06-13','07-13','08-13','09-13','10-13','11-13','12-13','13-13','14-13'],
  //   ['00-14','01-14','02-14','03-14','04-14','05-14','06-14','07-14','08-14','09-14','10-14','11-14','12-14','13-14','14-14']
  // ];
// }

// Board.prototype.shuffleScrabbleBag = (array) => {
//   var m = array.length;
//   var t;
//   var i;
//   while (m) {
//     i = Math.floor(Math.random() * m--);
//     t = array[m];
//     array[m] = array[i];
//     array[i] = t;
//   }
//   return array;
// }

// Board.prototype.wordScore = (strOfLetters, startCoors, endCoors) => {
//   let score = 0;
//   let wordMultiplier = 1;

//   let traversingVertically = false;
//   if (Number(endCoors.slice(0,2))-Number(startCoors.slice(0,2)) === 0) {
//     traversingVertically = true;
//   }

//   for (let i = 0; i < strOfLetters.length; i++) {
//     let letterMultiplier = 1;

//     let currentCoor;
//     if (traversingVertically) {

//       let prefix = startCoors.slice(0,3);
//       let suffix = (Number(startCoors.slice(3,5)+i)).toString();
//       (Number(startCoors.slice(3,5)) + i < 10) ? currentCoor = prefix + '0' + suffix : currentCoor = prefix + suffix 

//     } else {

//       let prefix = (Number(startCoors.slice(0,2))+i).toString();
//       let suffix = startCoors.slice(2,5);
//       (Number(startCoors.slice(0,2)) + i < 10) ? currentCoor = '0' + prefix + suffix : currentCoor = prefix + suffix

//     }

//     if (bonusTile[currentCoor] && bonusTile[currentCoor].type === 'wordMultiplier') {
//       wordMultiplier *= bonusTile[currentCoor].value;
//     } else if (bonusTile[currentCoor] && bonusTile[currentCoor].type === 'letterMultiplier') {
//       letterMultiplier = bonusTile[currentCoor].value;
//     }
//     score += letterPoints[strOfLetters[i]]*letterMultiplier;
//   }
//   score *= wordMultiplier;
//   return score;
// }

//keys will be 2 character strings of coordinates x and y => 'x-y' with the string always having a length of 5;

// const shuffleScrabbleBag = (array) => {
  //fisher-yates algorithm
//     var m = array.length, t, i;
//     while (m) {
//       i = Math.floor(Math.random() * m--);
//       t = array[m];
//       array[m] = array[i];
//       array[i] = t;
//     }
//     return array;
// // }

// const addLetterToRack = (letterArr) => {
//   return letterArr.pop();
// }

// const wordScore = (strOfLetters, startCoors, endCoors) => {
//   let score = 0;
//   let wordMultiplier = 1;

//   let traversingVertically = false;
//   if (Number(endCoors.slice(0,2))-Number(startCoors.slice(0,2)) === 0) {
//     traversingVertically = true;
//   }

//   for (let i = 0; i < strOfLetters.length; i++) {
//     let letterMultiplier = 1;

//     let currentCoor;
//     if (traversingVertically) {

//       let prefix = startCoors.slice(0,3);
//       let suffix = (Number(startCoors.slice(3,5)+i)).toString();
//       (Number(startCoors.slice(3,5)) + i < 10) ? currentCoor = prefix + '0' + suffix : currentCoor = prefix + suffix 

//     } else {

//       let prefix = (Number(startCoors.slice(0,2))+i).toString();
//       let suffix = startCoors.slice(2,5);
//       (Number(startCoors.slice(0,2)) + i < 10) ? currentCoor = '0' + prefix + suffix : currentCoor = prefix + suffix

//     }

//     if (bonusTile[currentCoor] && bonusTile[currentCoor].type === 'wordMultiplier') {
//       wordMultiplier *= bonusTile[currentCoor].value;
//     } else if (bonusTile[currentCoor] && bonusTile[currentCoor].type === 'letterMultiplier') {
//       letterMultiplier = bonusTile[currentCoor].value;
//     }
//     score += letterPoints[strOfLetters[i]]*letterMultiplier;
//   }
//   score *= wordMultiplier;
//   return score;
// }


// const preventBoardOverwrite = (board, x_pos, y_pos, letter) => {
//   if (board[y_pos][x_pos].length === 5) board[y_pos][x_pos] += letter;
//   else console.log('Invalid Move');
// }

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

        // leaving this unfinished to try hash table method instead for checking of bonus squares
        // y = startCoors[1] + i;
        // if (x % 7 === 0) {
        //   if (y % 7 === 0 && x !== 7 && y !== 7) {
        //     wordMultiplier *= 3;
        //   } else if (y === 3 || y === 11) {
        //     letterMultiplier = 2;
        //   }
        // } else if ((x >= 1 && x <= 4) || (x >= 10 && x <= 13)) {
        //   if(startCoors[1+i] === startCoors[0]) {
        //     wordMultiplier *= 2;
        //   } else if (startCoors[1+i] === -startCoors[0]+14) {
        //     wordMultiplier *= 2;
        //   }
        // } 



  // let score = 0;
  // for (let i = 0; i < str.length; i++) {
  //   score += letterPoints[str[i]];
  // } 








