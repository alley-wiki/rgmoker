import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold text-gray-800">Тарихи-мәдени аймақтар</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#intro" className="text-gray-700 hover:text-gray-900">Басты бет</a>
            <a href="#ancient" className="text-gray-700 hover:text-gray-900">Ежелгі өркениеттер</a>
            <a href="#heritage" className="text-gray-700 hover:text-gray-900">Мәдени мұра</a>
            <a href="#globalization" className="text-gray-700 hover:text-gray-900">Глобализация</a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#intro" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Басты бет</a>
            <a href="#ancient" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Ежелгі өркениеттер</a>
            <a href="#heritage" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Мәдени мұра</a>
            <a href="#globalization" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Глобализация</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;