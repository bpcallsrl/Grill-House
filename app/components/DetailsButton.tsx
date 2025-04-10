'use client';

import React, { useEffect } from 'react';

interface DetailsButtonProps {
  href: string;
  text: string;
}

const DetailsButton: React.FC<DetailsButtonProps> = ({ href, text }) => {
  useEffect(() => {
    console.log('DetailsButton mounted', { href, text });
  }, [href, text]);

  return (
    <div className="mt-auto flex justify-center w-full">
      <a 
        href={href}
        className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
      >
        {text}
      </a>
    </div>
  );
};

export default DetailsButton; 