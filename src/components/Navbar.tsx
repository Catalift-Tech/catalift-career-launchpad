
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-0.5' : 'bg-white py-1'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/f9f78053-63ce-481b-b0ae-b570b13ad6c9.png" 
                alt="Catalift Logo" 
                className="h-24 w-auto" 
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#how-it-works" className="font-medium text-gray-700 hover:text-[#03045E] transition-colors">How It Works</a>
            <a href="#cohorts" className="font-medium text-gray-700 hover:text-[#03045E] transition-colors">Cohorts</a>
            <a href="#webinars" className="font-medium text-gray-700 hover:text-[#03045E] transition-colors">Webinars</a>
            <Button asChild variant="outline" className="ml-4">
              <a href="#get-started">Log In</a>
            </Button>
            <Button asChild variant="outline" className="ml-2">
              <Link to="/coming-soon" className="flex items-center gap-1">
                <UserPlus size={18} /> For Mentor
              </Link>
            </Button>
            <Button asChild className="ml-2 bg-[#03045E] hover:bg-blue-800">
              <a href="#get-started">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 rounded-md"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg animate-fade-in">
            <div className="px-4 py-4 space-y-4 flex flex-col">
              <a 
                href="#how-it-works" 
                className="font-medium text-gray-700 hover:text-[#03045E] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#cohorts" 
                className="font-medium text-gray-700 hover:text-[#03045E] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cohorts
              </a>
              <a 
                href="#webinars" 
                className="font-medium text-gray-700 hover:text-[#03045E] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Webinars
              </a>
              <Button asChild variant="outline" className="w-full">
                <a href="#get-started" onClick={() => setMobileMenuOpen(false)}>Log In</a>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/coming-soon" className="flex items-center justify-center gap-1" onClick={() => setMobileMenuOpen(false)}>
                  <UserPlus size={18} /> For Mentor
                </Link>
              </Button>
              <Button asChild className="w-full bg-[#03045E] hover:bg-blue-800">
                <a href="#get-started" onClick={() => setMobileMenuOpen(false)}>Get Started</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
