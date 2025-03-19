import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["text-white", "text-yellow-300", "text-green-300", "text-red-300"];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <h1 className={`text-4xl font-bold drop-shadow-lg transition-colors duration-500 ${colors[colorIndex]}`}>Lakshmi Market</h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white font-medium hover:text-yellow-300 transition duration-300">Home</a>
            <a href="#about" className="text-white font-medium hover:text-yellow-300 transition duration-300">About</a>
            <a href="#services" className="text-white font-medium hover:text-yellow-300 transition duration-300">Services</a>
            <a href="#gallery" className="text-white font-medium hover:text-yellow-300 transition duration-300">Gallery</a>
            <a href="#contact" className="text-white font-medium hover:text-yellow-300 transition duration-300">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-600 py-3 shadow-md rounded-b-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-white font-medium hover:text-yellow-300 transition duration-300">Home</a>
            <a href="#about" className="block px-3 py-2 text-white font-medium hover:text-yellow-300 transition duration-300">About</a>
            <a href="#services" className="block px-3 py-2 text-white font-medium hover:text-yellow-300 transition duration-300">Services</a>
            <a href="#gallery" className="block px-3 py-2 text-white font-medium hover:text-yellow-300 transition duration-300">Gallery</a>
            <a href="#contact" className="block px-3 py-2 text-white font-medium hover:text-yellow-300 transition duration-300">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
