
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-16 code-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 to-background/80 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block">Hi, I'm</span>
              <span className="gradient-text block mt-2 typing-name">Nguyen Thi Minh Thu</span>
              <span className="text-xl md:text-2xl block mt-4 font-normal">👋</span>
            </h1>
            
            <div className="flex flex-wrap gap-3 my-6">
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-4 py-2 text-base">Mobile App</Badge>
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-4 py-2 text-base">React Native</Badge>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Passionate about <strong className="text-primary">building high-performance React Native mobile apps with deep native integration</strong>. I focus on optimizing <strong className="text-primary">user experience, performance, and the aesthetic quality of every application</strong>.
            </p>
            
            <div className="flex flex-wrap items-center gap-8 mb-8 text-muted-foreground">
              <a href="mailto:mintu.ngth@gmail.com" className="flex items-center hover:text-primary transition-colors">
                <Mail className="mr-2 h-5 w-5" />
                mintu.ngth@gmail.com
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
              
              <a 
                href="https://drive.google.com/file/d/1NQBalmLVWs8RHF1xwYHsgbqbEsTNcnD_/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Get My Resume
                </Button>
              </a>
              
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
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6DwJ8KsyhZoR3NA30FjCIJ3xLIhtDszvwmMtmpxlqK4-GwP4Nom9slXiWaDZ3-d2L2lgI4u6xOM1x2VvZi0HdQtXFiZ1iV21_IOS0Pfy9mG5Pnki8eN4CXcmPG8LYHYGDVHaeHElykhnMVUpw_09UZizQP-wak23E3QuqGvi2GlaMHOgzVgoZ7rMq51c/s1776/IMG_8167.JPG"
                alt="Nguyen Thi Minh Thu Profile Photo"
                className="w-full h-full object-cover"
              />
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
