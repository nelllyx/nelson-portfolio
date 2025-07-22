import React, { useState } from 'react';
import Preloader from './PreLoader';
import HeroSection from './HeroSection';
import Navigation from './Navigation';
import Bio from './Bio';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Qualifications from './Qualifications';
import Footer from './Footer';

const Portfolio = () => {
    const [showPreloader, setShowPreloader] = useState(true);

    const handlePreloaderComplete = () => {
        setShowPreloader(false);
    };

    return (
        <div className="min-h-screen  text-white">
            {showPreloader ? (
                <Preloader onComplete={handlePreloaderComplete} />
            ) : (
                <>
                    <Navigation />
                    <HeroSection />
                    <Bio />
                    <Skills />
                    <Projects />
                    <Qualifications />
                    <Contact />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default Portfolio;