import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Profile Image */}
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl md:text-4xl font-bold text-primary-foreground shadow-xl">
            MT
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Nguyen Thi <span className="text-primary">Minh Thu</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-primary font-medium">
              React Native Developer.
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I thrive on <span className="text-primary font-medium">creating scalable, user-friendly mobile applications</span> that are not just functional but also aesthetically stunning.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 pt-6">
            <a 
              href="https://linkedin.com/in/ntminhthu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-secondary/50"
              aria-label="Follow on LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/MinhThu100200" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-secondary/50"
              aria-label="Follow on GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://minhthunt.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-secondary/50"
              aria-label="Follow on Website"
            >
              <ExternalLink size={20} />
            </a>
            <a 
              href="mailto:mintu.ngth@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-secondary/50"
              aria-label="Follow on Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;