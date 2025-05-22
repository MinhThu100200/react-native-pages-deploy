
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

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
      
      {/* Floating Code Elements */}
      <div className="absolute top-1/4 right-10 opacity-20 animate-float hidden lg:block">
        <pre className="code-background">
          <code>
            <span className="code-keyword">import</span> React <span className="code-keyword">from</span> <span className="code-string">'react'</span>;<br/>
            <span className="code-keyword">import</span> {`{ View, Text }`} <span className="code-keyword">from</span> <span className="code-string">'react-native'</span>;<br/>
            <br/>
            <span className="code-keyword">const</span> <span className="code-function">App</span> = () =&gt; {`{`}<br/>
            &nbsp;&nbsp;<span className="code-keyword">return</span> (<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="code-variable">View</span>&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="code-variable">Text</span>&gt;Hello World&lt;/<span className="code-variable">Text</span>&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="code-variable">View</span>&gt;<br/>
            &nbsp;&nbsp;);<br/>
            {`}`};<br/>
          </code>
        </pre>
      </div>
      
      <div className="absolute bottom-1/3 left-10 opacity-20 animate-float animation-delay-1000 hidden lg:block">
        <pre className="code-background">
          <code>
            <span className="code-keyword">const</span> <span className="code-variable">styles</span> = <span className="code-function">StyleSheet</span>.create({`{`}<br/>
            &nbsp;&nbsp;<span className="code-variable">container</span>: {`{`}<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-variable">flex</span>: <span className="code-number">1</span>,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-variable">justifyContent</span>: <span className="code-string">'center'</span>,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-variable">alignItems</span>: <span className="code-string">'center'</span><br/>
            &nbsp;&nbsp;{`}`}<br/>
            {`}`});
          </code>
        </pre>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block">Hi, I'm a</span>
            <span className="gradient-text block mt-2">React Native Developer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Building exceptional mobile experiences with clean, efficient code
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="bg-primary hover:bg-primary/80 text-primary-foreground"
            >
              View My Projects
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-primary text-primary hover:bg-primary/10"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="animate-bounce mt-16 text-muted-foreground">
            <ArrowDown className="mx-auto" size={32} />
            <span className="sr-only">Scroll down</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
