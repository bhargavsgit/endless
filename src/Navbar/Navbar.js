import React  from 'react';
import logo from '../assets/logo-endless.svg';
import './navbar.css'

export default function Navbar(){
    return(<div className="navbar">
        <div className="logo">
            <img src={logo} alt="logo" className="logo-icon"/>
        </div>
    </div>);
}
