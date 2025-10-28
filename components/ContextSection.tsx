
import React from 'react';

const ContextSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FFFFFF]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#000000]">
          The Ikigai Season
        </h2>
        <div className="mt-8 space-y-6 text-lg text-[#000000]/80 leading-relaxed">
          <p>
            Cultu is not a brand—it’s a living experiment where imagination becomes collective proof. We explore how myth, community, and radical transparency can shape new realities of value.
          </p>
          <p className="font-accent italic text-2xl md:text-3xl text-[#000000] py-4">
            “Transparency is our strategy. Curiosity is our fuel.”
          </p>
          <p>
            This season, we draw inspiration from 'Ikigai'—the Japanese concept of a 'reason for being'. We are not launching a product; we are inviting you to observe an unfolding. To witness the process, the doubts, and the discoveries as they happen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContextSection;
