
import React from 'react';

const CommunitySection: React.FC = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="font-accent italic text-4xl md:text-5xl text-[#000000]">
          “Where imagination is peer-reviewed.”
        </h2>
        <p className="mt-6 text-lg text-[#000000]/80 leading-relaxed max-w-2xl mx-auto">
          The conversation continues beyond this page. Join fellow observers and participants to discuss the unfolding, share insights, and contribute to the myth.
        </p>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 px-10 py-4 font-body font-medium text-lg bg-transparent text-[#000000] border-2 border-[#000000] rounded-full hover:bg-[#000000] hover:text-[#FFFFFF] transition-colors duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Enter the Forum
        </a>
      </div>
    </section>
  );
};

export default CommunitySection;
