import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="EcoChain Logo" className="w-12 h-12 mr-2" />
          <h1 className="text-6xl font-bold text-green font-dancing">EcoChain</h1>
        </div>
        <nav>
          <ul className="flex space-x-4 font-exo">
            <li><a href="#" className="text-dark-green hover:text-green transition-colors">Home</a></li>
            <li><a href="#" className="text-dark-green hover:text-green transition-colors">About</a></li>
            <li><a href="#" className="text-dark-green hover:text-green transition-colors">Services</a></li>
            <li><a href="#" className="text-dark-green hover:text-green transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;