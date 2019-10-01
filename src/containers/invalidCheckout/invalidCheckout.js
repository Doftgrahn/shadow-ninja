import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

const InvalidCheckout = ({auth}) => {
  return (
    <div>
      {
        auth.isAuthenticated ? (<div>You cant buy that right now.. {auth.errorMsg}</div>) : (<div>Logga in för att fullfölja ditt köp <Link to="/login">Login</Link></div>)
      }
    </div>
  )
};



const mapStateToProps = state => ({auth: state.auth})

export default connect(mapStateToProps)(InvalidCheckout);
