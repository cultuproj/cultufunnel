import React from 'react';

const testimonials = [
  {
    id: 1,
    quote: "Cultu isn't selling a product; it's posing a question. Being part of that question is more compelling than any answer could be.",
    name: "Elara Vance",
    title: "First Observer",
    // Placeholder image path. In a real app, this would point to an uploaded asset.
    imagePath: "https://i.pravatar.cc/150?u=elara" 
  },
  {
    id: 2,
    quote: "The transparency is what drew me in. You're not just seeing a final result, you're witnessing the entire, messy, beautiful process of creation.",
    name: "Kaelen Moore",
    title: "Participant",
    // Placeholder image path.
    imagePath: "https://i.pravatar.cc/150?u=kaelen"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-[#000000]">
          Voices of Observation
        </h2>
        <p className="text-center mt-4 text-lg text-[#000000]/70">Reflections from participants in the unfolding myth.</p>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24 items-start">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`transform transition-transform duration-300 hover:scale-105 ${index % 2 !== 0 ? 'md:mt-12' : ''}`}
            >
              <div className="relative pt-12 p-8 bg-[#FFFFFF]/60 rounded-lg border border-[#C7A76B]/50 shadow-sm">
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0">
                  <img 
                    src={testimonial.imagePath} 
                    alt={`Portrait of ${testimonial.name}`}
                    className="w-24 h-24 rounded-full object-cover border-4 border-[#C7A76B] bg-[#D4C6B0] shadow-lg"
                  />
                </div>
                <blockquote className="font-accent italic text-xl md:text-2xl text-[#000000] text-center md:text-left">
                  “{testimonial.quote}”
                </blockquote>
                <div className="mt-6 text-center md:text-right">
                  <p className="font-bold font-body text-md text-[#000000]">{testimonial.name}</p>
                  <p className="text-sm text-[#000000]/70">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;