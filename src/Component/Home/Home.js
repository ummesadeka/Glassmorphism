import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from './Banner/Banner';
import './Home.css'
import ImageBox from './ImageBox/ImageBox';

const Home = () => {
    return (
        <section>
            <div className="container">
        <Navbar/>
        <Banner/>
        <ImageBox/>
        </div>
        </section>
      
        
    );
};

export default Home;