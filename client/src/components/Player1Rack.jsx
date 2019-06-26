import React from 'react';

const Player1Rack = ({rack, setLetter}) => {
  return (
    <div className="rack-container">
        <img src="http://clipart-library.com/img/937517.png" alt="PlayerRack" className="rack"/>
        {(rack.length === 0) 
          ? <div></div> 
          : rack.map((letter, i) => {
            return <img src={window.letterImages[letter]} key={i} alt="scrabble letter" className={`letter${i}`} onClick={()=>{setLetter(letter);}}/>})
        }
    </div>
  )
}

export default Player1Rack;