import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = ({ toggleDarkMode, isDarkMode }) => {
    const [nav, setNav] = useState(false);
    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        },
    ];

    return (
        <div className={`flex justify-between items-center w-full h-20 px-4 fixed ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <div>
                <h1 className='text-5xl font-signature ml-2'>
                    Devagya
                </h1>
            </div>
            <ul className='hidden md:flex'>
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className={`px-4 cursor-pointer capitalize font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} hover:scale-105 duration-200`}
                    >
                        {link}
                    </li>
                ))}
            </ul>

            <div className='flex items-center'>
                <button onClick={toggleDarkMode} className={`mr-4 p-2 rounded ${isDarkMode ? 'bg-gray-200 text-black' : 'bg-gray-800 text-white'}`}>
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
                <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden'>
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
            </div>

            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-amber-500 to-white text-gray-500'>
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className='px-4 cursor-pointer capitalize py-6 text-4xl'
                        >
                            {link}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NavBar;
