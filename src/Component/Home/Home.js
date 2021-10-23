import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from './Banner/Banner';
import './Home.css'
import ImageBox from './ImageBox/ImageBox';
import Sidebar from './Sidebar/Sidebar';

const Home = () => {
    return (
        <section>
            <div className="container">
        <Navbar/>
        <Banner/>
        <ImageBox/>
        <Sidebar />
        </div>
        </section>
      
        
    );
};

export default Home;