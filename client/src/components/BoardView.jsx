import React from 'react';

const BoardView = ({grid, updateGrid, currentLetter, setCurrentBoardTile, currentBoardTile, appendLetterToGrid}) => {
  return (
  <div className="container-board">
  {window.grid.map((col, i) => { return (
    col.map((row, j) => {
    if (row[5]) {
      return (<img src={window.letterImages[row[5]]} alt="a letter" key={row.toString().slice(0,5)} style={{width: '95%'}} />)
    } else if (currentLetter && currentBoardTile && currentBoardTile === row) {
      return ( <img src={window.letterImages[currentLetter]} alt="a letter" key={row.toString().slice(0,5)} style={{width: '95%'}} />)
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

