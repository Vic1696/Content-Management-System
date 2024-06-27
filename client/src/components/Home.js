import React from 'react';
import {link} from 'react-router-dom';

const Home =() => (
    <div>
        <h1> Welcome to the content management system</h1>
        <Link to="/register"> Register </Link>
        <br />
        <Link to="/login"> Login </Link>
    </div>
);

export default Home;