import React from 'react'
import facebook from '../../../images/facebook.png';
import instagram from '../../../images/instagram.png';
import twitter from '../../../images/twitter.png';
import './Sidebar.css'

function Sidebar() {
    return (
        <ul className="side">
           <li><a href="#"><img src={facebook} alt="" /></a></li>
           <li><a href="#"><img src={instagram} alt="" /></a></li>
           <li><a href="#"><img src={twitter} alt="" /></a></li>
        </ul>
    )
}

export default Sidebar;
