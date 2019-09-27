import React from 'react';
import { Link } from 'react-router-dom';
import './pagenotfound.scss';

const PageNotFound = () => (
<div className="Maindiv">

<h1>Error 404</h1>
<h3>Even ninjas get lost</h3>

<center><Link to="/">Return to Home Page</Link></center>
</div>
);
export default PageNotFound;
