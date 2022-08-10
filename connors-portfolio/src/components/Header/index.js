import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

const Header = () => {
    return (
        <div className='p-4 bg-dark' style={{ position: 'fixed', height: '100vh', width: '15vw' }}>
            <span className='d-flex flex-column'>
                <Link to='/' className='mb-2' style={{ textDecoration: 'none', color: 'rgb(80, 80, 80)' }}>
                    Home
                </Link>
                <hr style={{ color: 'white'}} />
                <Link to='/about-me' className='mb-2' style={{ textDecoration: 'none', color: 'rgb(80, 80, 80)' }}>
                    About Me
                </Link>
                <hr style={{ color: 'white'}} />
                <Link to='/contact-me' className='mb-2' style={{ textDecoration: 'none', color: 'rgb(80, 80, 80)' }}>
                    Contact Me
                </Link>
                <hr style={{ color: 'white'}} />
                <Link to='/portfolio' className='mb-2' style={{ textDecoration: 'none', color: 'rgb(80, 80, 80)' }}>
                    Portfolio
                </Link>
                <hr style={{ color: 'white'}} />
                <Link to='/resume' className='mb-2' style={{ textDecoration: 'none', color: 'rgb(80, 80, 80)' }}>
                    Resume
                </Link>
            </span>
        </div>
    )
};

export default Header;