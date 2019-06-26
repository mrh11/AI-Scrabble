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
  const [currentLetter, setLetter] = useState('')  //to select a letter from the rack
  const [currentBoardTile, setCurrentBoardTile] = useState(''); //if a player clicks on a board tile while a letter is selected, render the tile

  let addLetterToRack = () => {
   if (window.scrabbleBag.length === 0) {
     console.log('Out of Tiles');
   } else {
     window.scrabbleBag = window.shuffleScrabbleBag(window.scrabbleBag);
     return window.scrabbleBag.pop();
   }
  }

  //create function which efficiently locates on the grid the currentBoardTile
  //the final two characters are the row, the first two are the column
  let appendLetterToGrid = () => {
    let str = currentBoardTile;
    let row = Number(str.slice(3,5));
    let col = Number(str.slice(0,2));
    window.grid[row][col] += currentLetter;
  }
  
  return (
  <div >
    <ScrabbleBag playerState={playerState} p2Rack={p2Rack} updatePlayer2Rack={updatePlayer2Rack} p1Rack={p1Rack} updatePlayer1Rack={updatePlayer1Rack} addLetterToRack={addLetterToRack}/>
    <h1 >{`Player: ${playerState}`}</h1>
    <button onClick={()=>{(playerState === 1) ? changePlayer(2) : changePlayer(1); setCurrentBoardTile(''); setLetter('')}} className="button">Switch Player</button>
    <button onClick={()=> {console.log('testing')}} className="setTileButton">Set Tile</button>
  <div >
    <BoardView setLetter={setLetter} currentLetter={currentLetter} currentBoardTile={currentBoardTile} setCurrentBoardTile={setCurrentBoardTile}/>
  </div>
  {(playerState === 1) ? <Player1Rack rack={p1Rack} currentLetter={currentLetter} setLetter={setLetter}/> : <Player2Rack rack={p2Rack} currentLetter={currentLetter} setLetter={setLetter}/>} 
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));