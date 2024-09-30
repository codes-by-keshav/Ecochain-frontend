import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark-green text-white py-4">
            <div className="container mx-auto flex flex-col items-center space-y-2 font-exo">
                <a href="https://github.com/ecochain" target="_blank" rel="noopener noreferrer" className="hover:text-off-white transition-colors">
                    <img src="/github.png" alt="GitHub Icon" className="w-8 h-8" />

                </a>
                <p className="text-center">&copy; 2024 EcoChain. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;