import Dropdown from 'react-bootstrap/Dropdown';
import DropDownButton from 'react-bootstrap/DropdownButton'
import './styles.css'
import { AiFillLinkedin } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi';

const Example = () => {
    return (
            <DropDownButton id='drop-menu' title=''>
                <div className='drop-items'>
                <Dropdown.Item style={{ color: 'rgb(300, 300, 300)'}} href='/'>Home</Dropdown.Item>
                <Dropdown.Item style={{ color: 'rgb(300, 300, 300)'}} href='/about-me'>About Me</Dropdown.Item>
                <Dropdown.Item style={{ color: 'rgb(300, 300, 300)'}} href='/contact-me'>Contact Me</Dropdown.Item>
                <Dropdown.Item style={{ color: 'rgb(300, 300, 300)'}} href='/portfolio'>Portfolio</Dropdown.Item>
                <Dropdown.Item style={{ color: 'rgb(300, 300, 300)'}} href='resume'>Resume</Dropdown.Item>
                <Dropdown.Item href='https://github.com/1645558?tab=repositories' target='_blank' rel='noreferrer'><AiFillLinkedin style={{ color: 'rgb(300, 300, 300)'}} /></Dropdown.Item>
                <Dropdown.Item href='resume'><FiGithub style={{ color: 'rgb(300, 300, 300)'}} /></Dropdown.Item>
                </div>
            </DropDownButton>
    )
}

export default Example;