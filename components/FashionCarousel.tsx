import React, { useState } from 'react';

const fashionItems = [
  {
    id: 1,
    name: "Shizuka Outer — The Quiet Flow",
    description:
      "Worn by those who move with the rhythm of stillness. Linen that breathes patience, folds that remember silence. Each thread hums the slow language of calm resolve. It doesn’t chase attention — it earns presence.",
    image: "/assets/Shizuka Outer.jpg", // <== tambahkan path foto kamu di sini
    svgPattern: (
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="pattern1"
            patternUnits="userSpaceOnUse"
            width="40"
            height="40"
            patternTransform="rotate(45)"
          >
            <circle
              cx="20"
              cy="20"
              r="15"
              stroke="#000000"
              strokeWidth="1"
              fill="none"
            />
            <circle
              cx="20"
              cy="20"
              r="5"
              stroke="#C7A76B"
              strokeWidth="1"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pattern1)" opacity="0.1" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Mai Set — Movement Ensemble",
    description:
      "Designed for motion that never rushes. The boxy top and flowing culottes trace the poetry of breath and time. Unhurried, unbound — just moving with the moment. For those who dance with stillness.",
    image: "/assets/Mai set1.jpg",
    svgPattern: (
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="pattern2"
            patternUnits="userSpaceOnUse"
            width="20"
            height="20"
          >
            <path d="M0 10h20M10 0v20" stroke="#000000" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pattern2)" opacity="0.1" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Hibi Shirt — Everyday Rhythm",
    description:
      "A shirt that follows the quiet beat of your day. Asymmetric folds echo the rhythm of small routines — coffee, light, pause. Made not for occasions, but for the moments between them. Wear it, and let simplicity hum.",
    image: "/assets/Hibi Shirt.jpg",
    svgPattern: (
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="pattern3"
            patternUnits="userSpaceOnUse"
            width="10"
            height="10"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="10"
              stroke="#000000"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pattern3)" opacity="0.1" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Kage Pants — Shadow Balance",
    description:
      "Where the light ends, shadow begins — both in harmony. The wide drape whispers of unseen equilibrium. Every step is an act of grace, not motion. Balance doesn’t need to be seen, only felt.",
    image: "/assets/Kage Pants1.jpg",
    svgPattern: (
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="pattern4">
            <stop offset="0%" stopColor="#C7A76B" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#pattern4)" opacity="0.2" />
      </svg>
    ),
  },
];

const FashionCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? fashionItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === fashionItems.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="py-16 md:py-24 bg-[#FFFFFF]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-[#000000]">
          Creations of the Season
        </h2>
        <p className="text-center mt-4 text-lg text-[#000000]/70">
          Artifacts from the unfolding myth.
        </p>

        <div className="mt-12 relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {fashionItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 p-4">
                    <div className="w-full md:w-1/2 h-80 bg-[#D4C6B0] rounded-lg relative overflow-hidden">
                      {item.svgPattern}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-90"
                      />
                      <div className="absolute inset-0 border-4 border-[#FFFFFF]/50 rounded-lg"></div>
                    </div>
                    <div className="w-full md:w-1/2 text-center md:text-left">
                      <h3 className="font-heading text-3xl text-[#000000]">
                        {item.name}
                      </h3>
                      <p className="font-accent italic text-xl text-[#000000]/80 mt-4">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute top-1/2 left-0 md:-left-12 transform -translate-y-1/2 bg-[#000000]/50 text-white p-2 rounded-full hover:bg-[#000000] transition-colors duration-300 z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute top-1/2 right-0 md:-right-12 transform -translate-y-1/2 bg-[#000000]/50 text-white p-2 rounded-full hover:bg-[#000000] transition-colors duration-300 z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {fashionItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentIndex === index
                    ? "bg-[#000000]"
                    : "bg-[#C7A76B]/50 hover:bg-[#C7A76B]"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FashionCarousel;
