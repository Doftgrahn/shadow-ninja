import React from "react";
import { connect } from "react-redux";


const GameLibrary = ({auth}) => {
  let gamesInLibrary = auth.user.gameLibrary.map(game => {
     return (
       <div key={game._id} className='test'>
         <h1>{game.title}</h1>
             <img src={game.imgURL} alt={game.name}/>
       </div>
     )
  })
  if (!gamesInLibrary.length) {
    gamesInLibrary = <p>Your library looks empty, better visit our shop to fill it out.</p>
  }
  return (
    <div className='singlegames'>
      {gamesInLibrary}
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
});




export default connect(mapStateToProps)(GameLibrary);
