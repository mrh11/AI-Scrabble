import React from 'react';

const BoardView = ({word, changeWord, currentLetter, setCurrentBoardTile, currentBoardTile, appendLetterToGrid}) => {

  let dropChanges = (e, coor) => {
    e.preventDefault();
    let tile = e.dataTransfer.getData('tile');
    setCurrentBoardTile(coor);
    appendLetterToGrid(tile, coor);
    changeWord(word + tile);
    console.log(word + tile);
  }

  return (
  <div className="container-board">
    {window.Scrabble.grid.map((col, i) => { return (
      col.map((row, j) => {
        if (row[5]) { // if this square has a letter set on it
          return (<img src={window.Scrabble.letterImages[row.slice(5)]} alt="a letter" key={row.slice(0,5)} style={{width: '95%'}} />)
        } else if (currentLetter && currentBoardTile && currentBoardTile === row) { // if a tile has been selected but the tile has not been set
          return (<img src={window.Scrabble.letterImages[currentLetter]} alt="a letter" key={row.slice(0,5)} style={{width: '95%'}} />)
        } else { // if the square is empty
         return (<div key={row.slice(0,5)} value={row.slice(0,5)}
         onDragOver = {(e)=>{e.preventDefault();}}
         onDrop = {(e) => {dropChanges(e, row.slice(0,5))}}>
    </div>)
        }
      })
    )})}
  </div>
  )}

export default BoardView;
