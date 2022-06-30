import React from 'react';
import Banner from '../components/Banner.js';
import About from '../components/About.js/index.js';
import About2 from '../components/About2/index.js';
import Buy from '../components/Buy/index.js';
import Faq from '../components/Faq/index.js';
import Contact from '../components/Contact/index.js';
import NewsLetter from '../components/NewLetter/index.js';
import Footer from '../components/Footer/index.js'

const Home = () => {
    return (
        <>
            <Banner />
            <About />
            <About2 />
            <Buy />
            <Faq />
            <Contact />
            <NewsLetter />
            <Footer />
        </>
    );
};

export default Home;