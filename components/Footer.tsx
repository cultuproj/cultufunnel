
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#000000] text-[#D4C6B0]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="flex justify-center items-center space-x-2">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 100 100" 
            >
              <circle cx="50" cy="50" r="40" fill="none" stroke="#D4C6B0" strokeWidth="4"/>
              <path d="M 20 30 A 40 40 0 0 1 80 30" fill="none" stroke="#D4C6B0" strokeWidth="4" transform="rotate(60 50 50)"/>
              <path d="M 20 70 A 40 40 0 0 1 80 70" fill="none" stroke="#D4C6B0" strokeWidth="4" transform="rotate(-60 50 50)"/>
            </svg>
            <span className="font-heading text-2xl tracking-widest">
              cultu
            </span>
        </div>
        <p className="mt-4 text-md text-[#D4C6B0]/80">
          Everything here is still in progress.
        </p>
        <p className="mt-1 text-sm text-[#D4C6B0]/60">
          © {new Date().getFullYear()} Cultu. An Open Experiment.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
