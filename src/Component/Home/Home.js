import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <section>
            <div className="container">
                <header>
                    <a href="#" className="logo"> Abyaz</a>
                    <ul>
                        <li> <a href="#">Home</a> </li>
                        <li> <a href="#">About</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </header>
            </div>
        </section>
    );
};

export default Home;