import React from 'react';

const Player2Rack = ({rack, setLetter}) => {
  return (
    <div className="rack-container">
    {/* <img src="http://clipart-library.com/img/937517.png" alt="PlayerRack" /> */}
    {(rack.length === 0) 
          ? <div></div> 
          : rack.map((letter, i) => {
            return <img src={window.letterImages[letter]} key={i} alt="scrabble letter" onClick={()=>{setLetter(letter)}}/>})
        }
    </div>

  )
}

export default Player2Rack;