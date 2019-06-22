import React, {useState, useEffect} from 'react';
import ReactDom from 'reactdom';
import Axios from 'axios';


const App = () => {
  const [player, switchPlayer] = useState(1);
  return (
    <div>
      <BoardView />
      <player1Rack />
      <player2Rack />
    </div>
  )
}