import React from 'react';

interface FooterProps {
  title: string;
}
const Footer: React.FC<FooterProps> = ({ title }) => {
  return (
    <div className="bg-gray-200 text-gray-800 p-4">
      <p className="text-1xl text-center">{title}</p>
    </div>
  );
};

export default Footer;