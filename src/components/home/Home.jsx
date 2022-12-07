import React from 'react';
import NavBar from '../navBar/NavBar';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <NavBar />
            <Link to="/drugsFinder">NavBar </Link>
        </div>
    );
}

export default Home;
