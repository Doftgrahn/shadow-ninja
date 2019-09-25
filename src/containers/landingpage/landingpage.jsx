import React from 'react';
import {Link} from "react-router-dom";

import Fade from 'react-reveal/Fade';

//import {ReactComponent as Hero} from './icon/shadow.svg';



const LandingPage = () => {
    return (<div className="box">
    <Fade>

        <div className="title">

            <h1 className="big">xX~ShadowNinja~Xx</h1>

            <Link to={'/store'}>
                <button>Store</button>
            </Link>

        </div>
    </Fade>
    </div>)
}

export default LandingPage;
