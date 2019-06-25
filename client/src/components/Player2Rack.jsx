const Player2Rack = (props) => {
  return (
    <div className="rackContainer">
      <img src={props.letterImages['A']} alt="testing" className="letter"/>
      <img src="http://clipart-library.com/img/937517.png" alt="PlayerRack" className="rack"/>
    </div>
  )
}

export default Player2Rack;