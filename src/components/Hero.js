import React from 'react';
import { Leaf } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero bg-off-white py-20">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-1/2">
          <h2 className="text-5xl font-bold mb-4 text-dark-green font-exo">Welcome to EcoChain</h2>
          <p className="text-green mb-8 font-exo">Empowering a sustainable future through blockchain technology.</p>
          <button className="bg-green text-white px-6 py-3 rounded-full font-semibold font-exo flex items-center space-x-2 hover:bg-dark-green transition-colors duration-300">
            <span>Login</span>
            <Leaf className="w-5 h-5 animate-spin" />
          </button>
        </div>
        <div className="w-2/3">
          <img src="/hero-image.png" alt="EcoChain Hero" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;