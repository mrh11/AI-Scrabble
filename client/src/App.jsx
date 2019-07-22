import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

import BoardView from './components/BoardView.jsx'
import Player1Rack from './components/Player1Rack.jsx'
import Player2Rack from './components/Player2Rack.jsx'
import ScrabbleBag from './components/ScrabbleBag.jsx'
import ScoreCount from './components/ScoreCount.jsx'

const App = () => {
  const [playerState, changePlayer] = useState(1);  //switch between player1 and player 2
  const [p1Rack, updatePlayer1Rack] = useState([]);  //add tiles to player1 rack
  const [p2Rack, updatePlayer2Rack] = useState([]); //add tiles to player2 rack
  const [word, changeWord] = useState('');  //will be used for word scoring
  const [currentLetter, setLetter] = useState(0)  //to select a letter from the rack
  const [currentBoardTile, setCurrentBoardTile] = useState(''); //if a player clicks on a board tile while a letter is selected, render the tile

  let addLetterToRack = () => {
   if (window.Scrabble.scrabbleBag.length === 0) {
     console.log('Out of Tiles');
   } else {
     window.Scrabble.scrabbleBag = window.Scrabble.shuffleScrabbleBag(window.Scrabble.scrabbleBag);
     return window.Scrabble.scrabbleBag.pop();
   }
  }

  //create function which efficiently locates on the grid the currentBoardTile and Appends the letter to it
  let appendLetterToGrid = (aLetter, str) => {
    let row = Number(str.slice(3,5));
    let col = Number(str.slice(0,2));
    window.Scrabble.grid[row][col] += aLetter;

    if (playerState === 1) {
      let letterArr = p1Rack;
      letterArr.splice(currentLetter, 1);
      updatePlayer1Rack(letterArr);
    } else {
      let letterArr = p2Rack;
      letterArr.splice(currentLetter, 1);
      updatePlayer2Rack(letterArr);
    }
  }
  
  return (
  <div>
    <h1 >{`Player: ${playerState}`}</h1>
    <div className="grid">
      <ScrabbleBag playerState={playerState} p2Rack={p2Rack} updatePlayer2Rack={updatePlayer2Rack} p1Rack={p1Rack} updatePlayer1Rack={updatePlayer1Rack} addLetterToRack={addLetterToRack}/>
      <div className="button-container">
        <button onClick={()=>{(playerState === 1) ? changePlayer(2) : changePlayer(1); setCurrentBoardTile(''); setLetter('')}}>Switch Player</button>
      </div>
      <img src="https://scrabblehrnyc22.s3.amazonaws.com/Board.png" alt="board picture" className="boardImage"/> 
      <BoardView setLetter={setLetter} currentLetter={currentLetter} currentBoardTile={currentBoardTile} setCurrentBoardTile={setCurrentBoardTile} appendLetterToGrid={appendLetterToGrid}/>
      {(playerState === 1) 
        ? <Player1Rack rack={p1Rack} setLetter={setLetter} setCurrentBoardTile={setCurrentBoardTile} updatePlayer1Rack={updatePlayer1Rack}/> 
        : <Player2Rack rack={p2Rack} setLetter={setLetter}/>} 
      <ScoreCount/>
    </div>
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));