import React, { useState } from 'react'; // Don't forget to import useState!

interface ProfileCardProps {
  name: string;
  title: string;
  imageUrl: string;
  bio: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, title, imageUrl, bio }) => {
    const [isFollowing, setIsFollowing] = useState(false); // State for follow status
    const [showFullBio, setShowFullBio] = useState(false); // State for bio visibility

    // Event handler function
    const handleFollowToggle = () => {
        setIsFollowing(!isFollowing); // Toggle the state
    };
    
    const handleBioToggle = () => {
        setShowFullBio(!showFullBio); // Toggle the state
    };

    const truncatedBio = bio.length > 150 && !showFullBio ? bio.substring(0, 150) + '...' : bio;

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto text-center">
        {/* Profile Image */}
        <img
            src={imageUrl}
            alt={`${name}'s profile`}
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" // Tailwind classes for image
        />

        {/* Name and Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-1">{name}</h2>
        <p className="text-gray-600 text-sm mb-4">{title}</p>

        {/* Follow Button */}
        <button
            onClick={handleFollowToggle}
            className={`
                px-5 py-2 rounded-full text-white font-semibold transition-colors duration-200
                ${isFollowing ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'}
                mb-4
            `}
        >
            {isFollowing ? 'Following' : 'Follow'}
        </button>

        {/* Bio Section */}
        <p className="text-gray-700 text-sm mb-2">
            {truncatedBio} {/* Display the truncated or full bio */}
        </p>

        {/* Show More/Less Button for Bio */}
        {bio.length > 150 && ( // Only show button if bio is long enough to truncate
            <button
            onClick={handleBioToggle}
            className="text-blue-500 hover:underline text-xs focus:outline-none"
            >
            {showFullBio ? 'Show Less' : 'Show More'}
            </button>
        )}
        </div>
    );
};

export default ProfileCard;