
import React, { useState } from 'react';

const SignUpSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const res = await fetch("http://localhost:3001/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Something went wrong");

    alert("Thank you for joining the observation.");
    setName("");
    setEmail("");
  } catch (err) {
    console.error(err);
    alert("Failed to submit. Please try again.");
  }
};




  return (
    <section className="py-20 md:py-32 bg-[#000000] text-[#FFFFFF]">
      <div className="max-w-2xl mx-auto text-center px-6">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#FFFFFF]">
          Join the Observation
        </h2>
        <p className="mt-4 text-lg text-[#D4C6B0]">
          Step inside. You’ll see how myths are made, not sold.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 max-w-lg mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-5 py-3 bg-transparent border-2 border-[#C7A76B] text-[#FFFFFF] placeholder-[#D4C6B0]/70 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C7A76B] transition-colors duration-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-3 bg-transparent border-2 border-[#C7A76B] text-[#FFFFFF] placeholder-[#D4C6B0]/70 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C7A76B] transition-colors duration-300"
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full px-10 py-4 font-body font-medium text-lg bg-[#C7A76B] text-[#000000] border-2 border-[#C7A76B] rounded-full hover:bg-transparent hover:text-[#C7A76B] transition-colors duration-300 ease-in-out"
          >
            Witness
          </button>
        </form>
        <p className="mt-6 text-sm text-[#D4C6B0]/60">No spam. Only experiments.</p>
      </div>
    </section>
  );
};

export default SignUpSection;
