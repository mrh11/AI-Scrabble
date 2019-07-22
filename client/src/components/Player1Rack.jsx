import React from 'react';

const Player1Rack = ({rack, setLetter, setCurrentBoardTile, updatePlayer1Rack}) => {
  return (
    <div className="rack-container">
      {/* <img src="http://clipart-library.com/img/937517.png" alt="PlayerRack" className="rack"/> */}
      {(rack.length === 0) 
        ? <div></div> 
        : rack.map((letter, i) => 
          <img src={window.Scrabble.letterImages[letter]} key={i} alt={`letter`} draggable="true" onDragStart={(e)=>{e.dataTransfer.setData('tile', letter); setLetter(i);}}/>)
      }
    </div>
  )
}

export default Player1Rack;