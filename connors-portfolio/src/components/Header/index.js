import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'>
                <div>Home</div>
            </Link>
            <Link to='/about-me'>
                <div>About Me</div>
            </Link>
            <Link to='/contact-me'>
                <div>Contact Me</div>
            </Link>
            <Link to='/portfolio'>
                <div>Portfolio</div>
            </Link>
            <Link to='/resume'>
                <div>Resume</div>
            </Link>
        </div>
    )
};

export default Header;