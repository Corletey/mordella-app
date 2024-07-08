import React from 'react';
import aboutBg from "./images/Femininity.jpeg";
import { CirclePlay } from 'lucide-react';


const About = () => {
  return (
    <div className="flex items-center justify-between p-8 bg-white">
      <div className="w-1/2">
        <img 
          src= {aboutBg}
          alt="Smiling woman" 
          loading="lazy"
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="w-1/2 pl-8">
        <p className="text-sm text-gray-500 uppercase">About Furnish</p>
        <h2 className="text-3xl font-bold text-gray-800 mt-2 mb-4">
          Quality Makes the Belief for Customers
        </h2>
        <p className="text-gray-600 mb-6">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
        </p>
        <button className="flex items-center text-orange px-4 py-2  hover:bg-orange-600 transition duration-300">
          <CirclePlay className="h-8 w-8 mr-2 bg-orange-500 rounded-full" />
          Watch Video
        </button>
      </div>
    </div>
  );
};

export default About;