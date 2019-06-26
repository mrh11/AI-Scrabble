import React from 'react';

const ScrabbleBag = ({playerState, addLetterToRack, updatePlayer2Rack, p2Rack, updatePlayer1Rack, p1Rack}) => {
  return (
    <div className="bag-container">
    <img 
      src="http://chittagongit.com/images/pouch-icon/pouch-icon-16.jpg" 
      alt="scrabble bag" 
      
      onClick={()=> {
        if (playerState === 2) {
        (p2Rack.length < 7) ? updatePlayer2Rack([...p2Rack, addLetterToRack()]) : console.log("Too many tiles on rack"); console.log("Player 2", p2Rack);
        } else {
        (p1Rack.length < 7) ? updatePlayer1Rack([...p1Rack, addLetterToRack()]) : console.log("Too many tiles on rack"); console.log("Player 1", p1Rack.length)
        }}}
      />
      </div>
  )
}

export default ScrabbleBag;