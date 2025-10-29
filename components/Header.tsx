import React from 'react';

const CultuLogo: React.FC = () => (
  <div className="group">
    <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#000000]">
      <img
        src="/assets/cultu logo.png"
        alt="The Ikigai Season"
        className="inline-block w-[140px] md:w-[180px] transition-transform duration-500 ease-in-out
                   group-hover:-translate-y-2 group-hover:shadow-2xl"
      />
    </h2>
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
