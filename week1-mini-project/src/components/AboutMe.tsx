import React from 'react';

interface AboutMeProps {
  name: string;
  title: string;
  imageUrl: string;
  bio: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ name, title, imageUrl, bio }) => {
  return (
    <div className="bg-gray-300 rounded-lg shadow-md px-4 py-8 mx-4 my-8 text-center">
    {/* Profile Image */}
    <img
        src={imageUrl}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" // Tailwind classes for image
    />

    {/* Name and Title */}
    <h2 className="text-xl font-bold text-gray-800 mb-1">{name}</h2>
    <p className="text-gray-600 text-sm mb-4">{title}</p>

    {/* Bio Section */}
    <p className="text-gray-700 text-sm mb-2">
        {bio} {/* Display the truncated or full bio */}
    </p>
    </div>
  );
};

export default AboutMe;