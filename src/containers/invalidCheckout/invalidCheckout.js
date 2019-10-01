import React from 'react';
import {connect} from 'react-redux';


const InvalidCheckout = ({auth}) => {
  return (
    <div>
      <div>You cant buy that right now.. {auth.errorMsg}</div>
    </div>
  )
};



const mapStateToProps = state => ({auth: state.auth})

export default connect(mapStateToProps)(InvalidCheckout);
