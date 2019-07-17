import React from 'react';

// define component;
// map the window grid
// map each row of the grid
// if the row has a letter appened to it
  //return that letter's image
// else if there is a current letter and a currentBoardTile and the currentBoardTile is being rendered
  //return the image of the current letter
// else 
  //return an empty




const BoardView = ({grid, updateGrid, currentLetter, setCurrentBoardTile, currentBoardTile, appendLetterToGrid}) => {
  return (
  <div className="container-board">
  {window.Scrabble.grid.map((col, i) => { return (
    col.map((row, j) => {
    if (row[5]) {
      return (<img src={window.Scrabble.letterImages[row[5]]} alt="a letter" key={row.toString().slice(0,5)} style={{width: '95%'}} />)
    } else if (currentLetter && currentBoardTile && currentBoardTile === row) {
      return ( <img src={window.Scrabble.letterImages[currentLetter]} alt="a letter" key={row.toString().slice(0,5)} style={{width: '95%'}} />)
    } else {
      return (<div key={row.toString().slice(0,5)} value={row.toString().slice(0,5)} onClick = {() => {setCurrentBoardTile(row.toString().slice(0,5))}} >
              </div>)
    }
    }))
  })}
  </div>
  )
};

export default BoardView;

// className={`square${i}${j}`}

// {(currentLetter && currentLetter.length === 1) ? <img src={window.letterImages[currentLetter]} alt="letter"/> : <div></div>}





//if a currentletter has been selected and the current square has been selected window.letterImage[currentLetter] should be rendered
//otherwise render the normal div;

