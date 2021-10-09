import React from 'react';
import Banner from '../Home/Banner/Banner';
import './Navbar.css'

const Navbar = () => {
    return (
        
            
                <header>
                    <a href="#" className="logo"> Abyaz</a>
                    <ul>
                        <li> <a href="#" className='active'>Home</a> </li>
                        <li> <a href="#">About</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </header>
                
           
            
        
    );
};

export default Navbar;