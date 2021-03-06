import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
// import { ReactComponent as Download } from './download.svg';
// import { ReactComponent as Star } from './star.svg';
// import { ReactComponent as Play } from './play.svg';
const GameLibrary = ({auth}) => {
    let gamesInLibrary = auth
        .user
        .gameLibrary
        .map(game => {
            return (<div key={game._id} className='gameDisplay'>
                <h3>{game.title}</h3>
                <div className="imgDiv">
                    <img className="image" src={game.imgURL} alt={game.name}/>
                </div>
            </div>)
        })
    if (!gamesInLibrary.length)  {
        return gamesInLibrary = <div className="emptyLibrary">
            <p>Your library looks empty, visit the shop!</p>
            <Link to="/store" className="shopButton">store</Link>
        </div>
    }
    return (<div className='singlegames'>
        <h2>Your games</h2>
        {gamesInLibrary}
    </div>)
}

const mapStateToProps = state => ({auth: state.auth});

export default connect(mapStateToProps)(GameLibrary);

// <div className="buttonDisplay">
//   <Download className="download"/>
//   <Star className="download"/>
//   <Play className="download"/>
// </div>
