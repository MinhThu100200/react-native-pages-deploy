
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-hero-pattern -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background/30 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block">Hi, I'm</span>
              <span className="gradient-text block mt-2">Nguyen Thi Minh Thu</span>
              <span className="text-xl md:text-2xl block mt-4 font-normal">👋</span>
            </h1>
            
            <div className="flex flex-wrap gap-3 my-6">
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-4 py-2 text-base">Mobile App</Badge>
              <Badge className="bg-secondary/30 text-foreground hover:bg-secondary/40 px-4 py-2 text-base">Frontend Developer</Badge>
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-4 py-2 text-base">React Native</Badge>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Passionate about <strong className="text-primary">building high-performance web & mobile apps</strong> for the e-commerce and retail industry.
            </p>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              I prioritize <strong className="text-primary">user experience</strong> and love optimizing product performance to create <strong className="text-primary">smooth, intuitive, and reliable applications</strong>.
            </p>
            
            <div className="flex flex-wrap items-center gap-8 mb-8 text-muted-foreground">
              <a href="mailto:mintu.ngth@gmail.com" className="flex items-center hover:text-primary transition-colors">
                <Mail className="mr-2 h-5 w-5" />
                mintu.ngth@gmail.com
              </a>
              <a href="tel:+84346279377" className="flex items-center hover:text-primary transition-colors">
                <Phone className="mr-2 h-5 w-5" />
                0346279377
              </a>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <Button 
                onClick={scrollToProjects}
                size="lg" 
                className="bg-primary hover:bg-primary/80 text-primary-foreground"
              >
                View My Projects
              </Button>
              
              <div className="flex items-center gap-4">
                <a 
                  href="https://github.com/MinhThu100200" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://linkedin.com/in/ntminhthu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30">
              {/* Profile image would go here */}
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                Profile Photo
              </div>
            </div>
          </div>
        </div>
        
        <div className="animate-bounce mt-16 text-muted-foreground hidden md:block">
          <ArrowDown className="mx-auto" size={32} />
          <span className="sr-only">Scroll down</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
