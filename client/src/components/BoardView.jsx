import React from 'react';

const BoardView = ({grid, updateGrid, currentLetter, setCurrentBoardTile, currentBoardTile}) => {
  return (
  <div className="container">
  {grid.map((col, i) => { return (
    col.map((row, j) => {
      return (
        (currentLetter && currentBoardTile && currentBoardTile === row.toString()) ? <img src={window.letterImages[currentLetter]} alt="a letter" key={row.toString()} /> :
        <div key={row.toString()} value={row.toString()} onClick = {() => {setCurrentBoardTile(row.toString())}}>
        </div>)
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








// <table>
  //   <tbody>
  //   <tr>
  //     <td>A</td><td>A</td><td>A</td><td>A</td><td>A</td><td>A</td><td>A</td><td>A</td><td>A</td><td>A</td><td>A</td><td>A</td><td>A</td><td>A</td><td>A</td>
  //   </tr>
  //   <tr>      
  //     <td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td>
  //   </tr>
  //   <tr>
  //     <td>C</td><td>C</td><td>C</td><td>C</td><td>C</td><td>C</td><td>C</td><td>C</td><td>C</td><td>C</td><td>C</td><td>C</td><td>C</td><td>C</td><td>C</td>
  //   </tr>
  //   <tr>
  //     <td>D</td><td>D</td><td>D</td><td>D</td><td>D</td><td>D</td><td>D</td><td>D</td><td>D</td><td>D</td><td>D</td><td>D</td><td>D</td><td>D</td><td>D</td>
  //   </tr>
  //   <tr>
  //     <td>E</td><td>E</td><td>E</td><td>E</td><td>E</td><td>E</td><td>E</td><td>E</td><td>E</td><td>E</td><td>E</td><td>E</td><td>E</td><td>E</td><td>E</td>
  //   </tr>
  //   <tr>
  //     <td>F</td><td>F</td><td>F</td><td>F</td><td>F</td><td>F</td><td>F</td><td>F</td><td>F</td><td>F</td><td>F</td><td>F</td><td>F</td><td>F</td><td>F</td>
  //   </tr>
  //   <tr>
  //     <td>G</td><td>G</td><td>G</td><td>G</td><td>G</td><td>G</td><td>G</td><td>G</td><td>G</td><td>G</td><td>G</td><td>G</td><td>G</td><td>G</td><td>G</td>
  //   </tr>
  //   <tr>
  //     <td>d</td><td>d</td><td>d</td><td>d</td><td>d</td><td>d</td><td>d</td><td>d</td><td>d</td><td>d</td><td>d</td><td>d</td><td>d</td><td>d</td><td>d</td>
  //   </tr>
  //   <tr>
  //     <td>I</td><td>I</td><td>I</td><td>I</td><td>I</td><td>I</td><td>I</td><td>I</td><td>I</td><td>I</td><td>I</td><td>I</td><td>I</td><td>I</td><td>I</td>
  //   </tr>
  //   <tr>
  //     <td>J</td><td>J</td><td>J</td><td>J</td><td>J</td><td>J</td><td>J</td><td>J</td><td>J</td><td>J</td><td>J</td><td>J</td><td>J</td><td>J</td><td>J</td>
  //   </tr>
  //   <tr>
  //     <td>K</td><td>K</td><td>K</td><td>K</td><td>K</td><td>K</td><td>K</td><td>K</td><td>K</td><td>K</td><td>K</td><td>K</td><td>K</td><td>K</td><td>K</td>
  //   </tr>
  //   <tr>
  //     <td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td>
  //   </tr>
  //   <tr>
  //     <td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td>
  //   </tr>
  //   <tr>
  //     <td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td>
  //   </tr>
  //   <tr>
  //     <td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td>
  //   </tr>
  //   </tbody>
  // </table>