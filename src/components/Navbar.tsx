
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 py-4',
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
            <span className="gradient-text">MT</span> Nguyen
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('github')}
              className="text-foreground hover:text-primary transition-colors"
            >
              GitHub
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Social Media Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/MinhThu100200" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/ntminhthu" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://minhthunt.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <ExternalLink size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm shadow-md py-4">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('github')}
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                GitHub
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                Contact
              </button>
              {/* Social Media Icons - Mobile */}
              <div className="flex items-center space-x-4 pt-2">
                <a href="https://github.com/MinhThu100200" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/ntminhthu" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://minhthunt.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
