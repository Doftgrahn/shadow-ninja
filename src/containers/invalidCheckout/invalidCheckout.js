import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

const InvalidCheckout = ({auth}) => {
    return (<section className="InvalidCheckout">
        {
            auth.isAuthenticated
                ? (<p>{auth.errorMsg}!</p>)
                : (
                <div className="mustbeLoggedInIncheckout">
                    <p>Log in to complete you purchase.</p>
                    <Link to="/login">Login</Link>
                </div>)
        }
    </section>)
};

const mapStateToProps = state => ({auth: state.auth})

export default connect(mapStateToProps)(InvalidCheckout);
