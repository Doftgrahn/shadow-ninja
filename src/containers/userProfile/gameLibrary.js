import React from "react";
import { connect } from "react-redux";
import { ReactComponent as Download } from './download.svg';
import { ReactComponent as Star } from './star.svg';
import { ReactComponent as Play } from './play.svg';
const GameLibrary = ({auth}) => {
  let gamesInLibrary = auth.user.gameLibrary.map(game => {
     return (
       <div key={game._id} className='gameDisplay'>
         <h3>{game.title}</h3>
         <div className="buttonDisplay">
           <Download className="download"/>
           <Star className="download"/>
           <Play className="download"/>
         </div>
         <img className="image"src={game.imgURL} alt={game.name}/>
       </div>
     )
  })
  if (!gamesInLibrary.length) {
    gamesInLibrary = <div className="emptyLibrary">
                      Your library looks empty, better visit our shop to fill it out.

                      <button className="shopButton">Shop</button>
                      </div>
  }
  return (
    <div className='singlegames'>
      <h2>Your games</h2>
      {gamesInLibrary}
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
});




export default connect(mapStateToProps)(GameLibrary);
