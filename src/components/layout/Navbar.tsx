
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-eduBlue-600">Edu<span className="text-eduGreen-600">Craft</span></span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-eduBlue-600 transition-colors">Home</Link>
          <Link to="/services" className="text-sm font-medium hover:text-eduBlue-600 transition-colors">Services</Link>
          <Link to="/about" className="text-sm font-medium hover:text-eduBlue-600 transition-colors">About</Link>
          <Link to="/contact" className="text-sm font-medium hover:text-eduBlue-600 transition-colors">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline" className="text-eduBlue-600 border-eduBlue-600 hover:bg-eduBlue-50">Login</Button>
          </Link>
          <Link to="/register">
            <Button className="bg-eduBlue-600 hover:bg-eduBlue-700">Get Started</Button>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container py-4 flex flex-col gap-4">
            <Link to="/" className="px-2 py-2 text-sm font-medium hover:text-eduBlue-600 transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/services" className="px-2 py-2 text-sm font-medium hover:text-eduBlue-600 transition-colors" onClick={toggleMenu}>Services</Link>
            <Link to="/about" className="px-2 py-2 text-sm font-medium hover:text-eduBlue-600 transition-colors" onClick={toggleMenu}>About</Link>
            <Link to="/contact" className="px-2 py-2 text-sm font-medium hover:text-eduBlue-600 transition-colors" onClick={toggleMenu}>Contact</Link>
            <div className="flex flex-col gap-2 pt-2 border-t">
              <Link to="/login" onClick={toggleMenu}>
                <Button variant="outline" className="w-full text-eduBlue-600 border-eduBlue-600">Login</Button>
              </Link>
              <Link to="/register" onClick={toggleMenu}>
                <Button className="w-full bg-eduBlue-600 hover:bg-eduBlue-700">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
