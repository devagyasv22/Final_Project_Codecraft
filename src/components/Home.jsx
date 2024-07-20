import React, { useState } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import HeroImage from '../assets/HeroImage.jpeg';
import NavBar from './NavBar';

const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div>
            <NavBar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
            <div name="home" className={`h-screen w-full ${isDarkMode ? 'bg-gradient-to-b from-black to-zinc-500' : 'bg-gradient-to-b from-zinc-500 to-black'}`}>
                <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                    <div className='flex flex-col justify-center h-full'>
                        <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                            I am a Full Stack Developer
                        </h2>
                        <p className='text-gray-500 py-4 max-w-md'>
                            Welcome to my portfolio! I'm a passionate and driven individual with a strong background in software development, machine learning, and data science. As a mentee in a project, I've honed skills in HTML, JavaScript, and React. I have a solid foundation in building and deploying machine learning models to solve real-world problems.
                        </p>
                        <div>
                            <a href="https://github.com/devagyasv22" target="_blank" rel="noopener noreferrer">
                                <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-500 to-black cursor-pointer'>
                                    Portfolio
                                    <span className='group-hover:rotate-90 duration-300'>
                                        <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div>
                        <img src={HeroImage} alt='my profile' className='rounded-2xl mx-auto w-2/3 md:w-full' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
