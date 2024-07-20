import React from "react";

import fusion360 from "../assets/fusion360.jpg";
import AutoCAD from "../assets/AutoCAD.png";
import git from "../assets/git.png";
import node from "../assets/node.png";
import tensorflow from "../assets/tensorflow.png";
import javascript from "../assets/javascript.png";

const Experience = ({ isDarkMode }) => {
  const techs = [
    {
      id: 1,
      src: fusion360,
      title: "Fusion 360",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: AutoCAD,
      title: "AutoCAD",
      style: "shadow-red-500",
    },
    {
      id: 3,
      src: git,
      title: "Git",
      style: "shadow-purple-500",
    },
    {
      id: 4,
      src: node,
      title: "Node.js",
      style: "shadow-green-500",
    },
    {
      id: 5,
      src: javascript,
      title: "JavaScript",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: tensorflow,
      title: "TensorFlow",
      style: "shadow-orange-400",
    },
  ];

  return (
    <div
      name="experience"
      className={`w-full h-screen ${isDarkMode ? 'bg-gradient-to-b from-black to-zinc-500' : 'bg-gradient-to-b from-zinc-500 to-black'}`}
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
