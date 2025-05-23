
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Github, ExternalLink, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const GitHubSection = () => {
  return (
    <section id="github" className="py-16 md:py-24">
      <div className="container max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">Connect With Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out through any of these platforms. I'm always open to discussing new projects, ideas, or opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card className="bg-secondary/20 border-primary/20 hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-6 flex items-center space-x-4">
              <Github className="w-8 h-8 text-primary" />
              <div className="flex-1">
                <h3 className="text-xl font-semibold">GitHub</h3>
                <a 
                  href="https://github.com/MinhThu100200" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center mt-1"
                >
                  @MinhThu100200
                  <ExternalLink className="ml-1" size={14} />
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-secondary/20 border-primary/20 hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-6 flex items-center space-x-4">
              <Linkedin className="w-8 h-8 text-primary" />
              <div className="flex-1">
                <h3 className="text-xl font-semibold">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/ntminhthu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center mt-1"
                >
                  Nguyen Thi Minh Thu
                  <ExternalLink className="ml-1" size={14} />
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-secondary/20 border-primary/20 hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-6 flex items-center space-x-4">
              <ExternalLink className="w-8 h-8 text-primary" />
              <div className="flex-1">
                <h3 className="text-xl font-semibold">Personal Blog</h3>
                <a 
                  href="https://minhthunt.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center mt-1"
                >
                  minhthunt.com
                  <ExternalLink className="ml-1" size={14} />
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-secondary/20 border-primary/20 hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-6 flex items-center space-x-4">
              <Mail className="w-8 h-8 text-primary" />
              <div className="flex-1">
                <h3 className="text-xl font-semibold">Email</h3>
                <a 
                  href="mailto:mintu.ngth@gmail.com" 
                  className="text-primary hover:underline flex items-center mt-1"
                >
                  mintu.ngth@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
