import React from 'react';
import {Link} from "react-router-dom";
const LandingPage = () => {
    return (<div className="box">

        <div className="title">

            <h1 className="big">xX~ShadowNinja~Xx</h1>

            <Link to={'/store'}>
                <button>Store</button>
            </Link>

        </div>
    </div>)
}

export default LandingPage;
