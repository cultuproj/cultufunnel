
import React from 'react';

const CultuLogo: React.FC = () => (
  <div className="flex items-center space-x-4 group">
    <svg 
      width="40" 
      height="40" 
      viewBox="0 0 100 100" 
      className="transition-all duration-500 ease-in-out group-hover:scale-110"
    >
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <circle 
        cx="50" cy="50" r="40" 
        fill="none" 
        stroke="#000000" 
        strokeWidth="3"
        className="transition-all duration-500 ease-in-out group-hover:stroke-[#C7A76B]"
      />
      <path 
        d="M 20 30 A 40 40 0 0 1 80 30" 
        fill="none" 
        stroke="#000000" 
        strokeWidth="3" 
        transform="rotate(60 50 50)" 
        className="transition-all duration-500 ease-in-out group-hover:stroke-[#C7A76B]"
      />
      <path 
        d="M 20 70 A 40 40 0 0 1 80 70" 
        fill="none" 
        stroke="#000000" 
        strokeWidth="3" 
        transform="rotate(-60 50 50)" 
        className="transition-all duration-500 ease-in-out group-hover:stroke-[#C7A76B]"
      />
      <circle 
        cx="50" cy="50" r="40" 
        fill="none" 
        stroke="#C7A76B" 
        strokeWidth="4" 
        className="opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
        style={{filter: "url(#glow)"}}
      />
    </svg>
    <span className="font-heading text-4xl tracking-widest text-[#000000]">
      cultu
    </span>
  </div>
);


const Header: React.FC = () => {
  return (
    <header className="py-8 px-6 md:px-12 flex justify-start">
      <CultuLogo />
    </header>
  );
};

export default Header;
