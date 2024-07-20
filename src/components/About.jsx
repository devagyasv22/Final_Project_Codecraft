import React from 'react';

const About = ({ isDarkMode }) => {
  return (
    <div name="about" className={`w-full h-screen ${isDarkMode ? 'bg-gradient-to-b from-black to-zinc-500' : 'bg-gradient-to-b from-zinc-500 to-black'} text-white`}>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8' >
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>  
        </div> 
        <p className='text-xl mt-20'>
          Beyond my technical pursuits, I serve as the Head in Opportunity Open Source Conference, where I enhance my strategic thinking and leadership abilities. My creative skills are evident in my design work, having crafted over 30 posters, banners, and hoardings, along with replicating 50+ flexes and standees for festival marketing as an Antaragni Organizer.
        </p>
        <br/>
        <p className='text-xl mt-20'>
          Explore my portfolio to see my skill set and feel free to reach out for collaboration opportunities in software development, machine learning, and data science!
        </p>
      </div>
    </div>
  );
}

export default About;
