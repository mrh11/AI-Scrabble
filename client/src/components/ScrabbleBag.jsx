import React from 'react';

const ScrabbleBag = ({playerState, addLetterToRack, updatePlayer2Rack, p2Rack, updatePlayer1Rack, p1Rack}) => {
  return (
    <div className="bag-container">
    <img 
      src="https://scrabblehrnyc22.s3.amazonaws.com/pouch-icon-16.png" 
      alt="scrabble bag" 
      
      onClick={()=> {
        if (playerState === 2) {
        (p2Rack.length < 7) ? updatePlayer2Rack([...p2Rack, addLetterToRack()]) : console.log("Too many tiles on rack");
        } else {
        (p1Rack.length < 7) ? updatePlayer1Rack([...p1Rack, addLetterToRack()]) : console.log("Too many tiles on rack");
        }}}
      />
      </div>
  )
}

export default ScrabbleBag;