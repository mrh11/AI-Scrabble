import React from 'react'

const ScoreCount = (props) => {
  return (
    <div className="score">
      <div className="p1Header">Player 1 Word</div>
      <div className="p1Score">Score</div>
      <div className="p2Header">Player 2 Word</div>
      <div className="p2Score">Score</div>
      <div className="p1Total">Total:</div>
      <div className="p1TotalScore">0</div>
      <div className="p2Total">Total:</div>
      <div className="p2TotalScore">0</div>
    </div>
  )
}

export default ScoreCount