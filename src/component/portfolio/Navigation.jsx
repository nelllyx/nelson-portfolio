import {Link} from "react-router-dom";
import React, { useState } from "react";


const Navigation = ( )=> {

    const [menuOpen, setMenuOpen] = useState(false);
    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' }
    ];
    const resumeUrl = '/SoftwareEngineer.pdf';


    return (
        <nav  className="fixed top-0 left-0 right-0 z-50  w-full">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-1">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center">
                            <span className=" text-xl font-semibold text-white">Nelson. A</span>
                        </Link>
                    </div>

                    {/* Hamburger menu for mobile */}
                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    {/* Desktop nav links */}
                    <ul className="hidden md:flex md:items-center md:space-x-4">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="text-white hover:text-blue-300 px-3  rounded-md font-medium transition-colors duration-200"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href={resumeUrl}
                                download
                                className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition-colors duration-200 text-sm font-semibold ml-2"
                            >
                                Resume
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 10l5 5 5-5M12 15V3" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Mobile nav links dropdown */}
                {menuOpen && (
                    <ul className="md:hidden bg-blue-900 px-4 py-4 rounded-b-lg shadow-lg absolute left-0 right-0 top-16 z-40 flex flex-col space-y-4">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="block text-white hover:text-blue-300 px-3 py-2 rounded-md font-medium transition-colors duration-200"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href={resumeUrl}
                                download
                                className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition-colors duration-200 text-sm font-semibold mt-2"
                            >
                                Resume
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 10l5 5 5-5M12 15V3" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    )
}

export default Navigation