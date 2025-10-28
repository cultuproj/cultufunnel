
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-20">
      <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight max-w-4xl text-[#000000]">
        We’re building a living myth.
      </h1>
      <p className="mt-6 text-lg md:text-xl max-w-2xl text-[#000000]/80">
        Witness how brand becomes imagination.
      </p>
      <button className="mt-12 px-10 py-4 font-body font-medium text-lg bg-[#000000] text-[#FFFFFF] border-2 border-[#000000] rounded-full hover:bg-transparent hover:text-[#000000] transition-colors duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1">
        Enter the Experiment
      </button>
    </section>
  );
};

export default HeroSection;
