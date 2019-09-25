import React from 'react';
import Fade from 'react-reveal/Fade';


//import {ReactComponent as Icon} from '/public/images/shadow.svg';
import {Link} from "react-router-dom";


const UnAuthorised = () => {
    return (<main className="unAuthorised">
        <Fade>
         
            <h1>You must be logged in to be able to chat</h1>
            <Link to="/register">Log in</Link>
        </Fade>
    </main>)
}

export default UnAuthorised;
/*<div className="svg__Wrapper">
<Icon/>
</div>*/