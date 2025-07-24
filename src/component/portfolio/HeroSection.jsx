import React from "react";
import myImage from "/IMG_4490.JPG"



const HeroSection = () => {
    return(
        <section id="home" className="w-full pt-16 pb-2 mt-16">
            <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1  md:grid-cols-12  items-center gap-2">
                    {/* Social Icons */}
                    <div className="flex justify-center md:col-span-2 md:justify-start items-center">
                        <div className="flex flex-col items-start space-y-4">
                            {/* LinkedIn Logo */}
                            <a href="https://www.linkedin.com/in/nelson-akewe-785b14236/" target="_blank" rel="noopener noreferrer" className="mb-4 w-7 h-7">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-full h-full text-blue-200 hover:text-blue-400 transition-colors duration-200">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
                                </svg>
                            </a>
                            {/* GitHub Logo */}
                            <a href="https://github.com/nelllyx" target="_blank" rel="noopener noreferrer" className="w-7 h-7">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-full h-full text-blue-200 hover:text-blue-400 transition-colors duration-200">
                                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    {/* Profile Text */}
                    <div className="w-full flex flex-col md:items-start md:col-span-6 gap-3 p-2 items-center lg:mr-36">
                        <h3 className="text-xl md:text-2xl font-bold mb-1 tracking-[.37em] font-serif leading-10 text-center md:text-left mt-0">
                            Nelson Akewe
                        </h3>
                        <div className="flex flex-row items-center mb-2 mt-0 justify-center md:justify-start">
                            <hr className="border-t-2 border-red-700 w-16 mr-4"/>
                            <p className="text-red-800 leading-relaxed  m-0">Software Engineer</p>
                        </div>
                        <p className="leading-relaxed text-white text-center md:text-left mt-0">
                            I'm a versatile Software Engineer based in Lagos, Nigeria, <br/>
                            with a strong foundation in developing innovative solutions that harness technology to drive efficiency and impact.
                        </p>
                        <button className="mt-2 flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition-colors duration-200 text-base font-semibold mx-auto md:mx-0">
                            Say Hello
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L15 22L11 13L2 9L22 2Z" />
                            </svg>
                        </button>
                    </div>
                    {/* Glassmorphism Card Picture */}
                    <style>
                        {`
                        @keyframes floatCard {
                            0%, 100% { transform: translateY(0); box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); }
                            50% { transform: translateY(-12px); box-shadow: 0 16px 48px 0 rgba(31, 38, 135, 0.45); }
                        }
                        .glass-animate {
                            animation: floatCard 4s ease-in-out infinite;
                        }
                        `}
                    </style>
                    <div className="flex justify-center items-center w-full md:col-span-4" style={{ minHeight: '350px' }}>
                        <div className="relative bg-white/20 border border-white/30 rounded-2xl shadow-2xl backdrop-blur-2xl p-4 w-72 h-80 flex items-center justify-center glass-animate overflow-hidden" style={{ boxShadow: '0 8px 32px 0 rgba(31,38,135,0.37)' }}>
                            {/* Gradient overlay for extra glass effect */}
                            <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(56,189,248,0.10) 100%)' }} />
                            {/* Animated glowing border */}
                            <div className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-cyan-300 opacity-40 animate-pulse" />
                            <img
                                src={myImage}
                                alt="Profile"
                                className="rounded-xl w-60 h-72 object-cover shadow-2xl relative z-10"
                                style={{ filter: 'brightness(0.99) contrast(0.99) blur(0.2px)', transition: 'filter 0.3s' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HeroSection;
