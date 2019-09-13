import React from "react";
import { connect } from "react-redux";


const GameLibrary = ({auth}) => {
  console.log('this?', auth)
  let gamesInLibrary = auth.user.gameLibrary.map(game => {
    console.log('game: ',game)
     return (
       <div key={game.id} className='test'>
         <p>{game.title}</p>
         <p>{game.category}</p>
         <p>{game.rating}</p>
         <p>{game.imgURL}</p>
       </div>
     )
  })
  return (
    <div>
      {gamesInLibrary}
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(GameLibrary);
