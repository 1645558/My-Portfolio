import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub } from 'react-icons/fi';
import { AiFillLinkedin } from 'react-icons/ai'

const Header = () => {

    return (
            <div className="nav-menu">
                <div className='p-4 bg-dark' style={{ position: 'fixed', height: '100vh', width: '15vw' }}>
                    <span className='d-flex flex-column'>
                        <Link id='link-style' to='/' className='mb-2' style={{ textDecoration: 'none', color: 'rgb(80, 80, 80)' }}>
                            Home
                        </Link>
                        <hr style={{ color: 'white' }} />
                        <Link id='link-style' to='/about-me' className='mb-2' style={{ textDecoration: 'none', color: 'rgb(80, 80, 80)' }}>
                            About Me
                        </Link>
                        <hr style={{ color: 'white' }} />
                        <Link id='link-style' to='/contact-me' className='mb-2' style={{ textDecoration: 'none', color: 'rgb(80, 80, 80)' }}>
                            Contact Me
                        </Link>
                        <hr style={{ color: 'white' }} />
                        <Link id='link-style' to='/portfolio' className='mb-2' style={{ textDecoration: 'none', color: 'rgb(80, 80, 80)' }}>
                            Portfolio
                        </Link>
                        <hr style={{ color: 'white' }} />
                        <Link id='link-style' to='/resume' className='mb-2' style={{ textDecoration: 'none', color: 'rgb(80, 80, 80)' }}>
                            Resume
                        </Link>
                        <div className="icons">
                            <a href='https://github.com/1645558?tab=repositories' target='_blank' rel='noreferrer'>
                                <FiGithub className='d-flex flex-row' style={{ color: 'rgb(200, 200, 200)', position: 'absolute', bottom: '1%', fontSize: '50px' }} />
                            </a>
                        </div>
                        <div className="icons-2">
                            <a href='https://www.linkedin.com/in/connor-thompson-025286237/' target='_blank' rel='noreferrer'>
                                <AiFillLinkedin className='d-flex flex-row' style={{ color: 'rgb(200, 200, 200)', position: 'absolute', bottom: '1%', fontSize: '50px', marginLeft: '25%' }} />
                            </a>
                        </div>
                    </span>
                </div>
            </div>
    )
};

export default Header;