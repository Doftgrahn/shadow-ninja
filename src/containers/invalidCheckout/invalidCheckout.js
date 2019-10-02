import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

const InvalidCheckout = ({auth}) => {
    return (<section className="InvalidCheckout">
        {
            auth.isAuthenticated
                ? (<p>{auth.errorMsg}!</p>)
                : (<p>Logga in för att fullfölja ditt köp
                    <Link to="/login">Login</Link>
                </p>)
        }
    </section>)
};

const mapStateToProps = state => ({auth: state.auth})

export default connect(mapStateToProps)(InvalidCheckout);
