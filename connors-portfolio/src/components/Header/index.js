import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

const Header = () => {
    return (
        <div className='p-4 bg-dark' style={{ position: 'fixed', height: '100vh', width: '15vw' }}>
            <span className='d-flex flex-column'>
                <Link to='/' style={{ textDecoration: 'none', color: 'rgb(80, 80, 80)' }}>
                    Home
                </Link>
                <Link to='/about-me' style={{ textDecoration: 'none', color: 'rgb(80, 80, 80)' }}>
                    About Me
                </Link>
                <Link to='/contact-me' style={{ textDecoration: 'none', color: 'rgb(80, 80, 80)' }}>
                    Contact Me
                </Link>
                <Link to='/portfolio' style={{ textDecoration: 'none', color: 'rgb(80, 80, 80)' }}>
                    Portfolio
                </Link>
                <Link to='/resume' style={{ textDecoration: 'none', color: 'rgb(80, 80, 80)' }}>
                    Resume
                </Link>
            </span>
        </div>
    )
};

export default Header;