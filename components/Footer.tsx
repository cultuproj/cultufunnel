import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#000000] text-[#D4C6B0]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="flex justify-center items-center space-x-2 group">
          {/* Logo Ikigai dengan hover effect + shadow putih */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#D4C6B0]">
            <img
              src="/assets/cultu logo.png"
              alt="Cultu Brand Logo"
              className="inline-block w-[150px] md:w-[200px] transition-transform duration-500 ease-in-out
                         group-hover:-translate-y-2 group-hover:drop-shadow-[0_10px_15px_rgba(255,255,255,0.7)]"
            />
          </h2>
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
