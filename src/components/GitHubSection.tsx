
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const GitHubSection = () => {
  return (
    <section id="github" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">Links & Resources</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out my GitHub repositories and personal blog for more information about my work and thoughts on React Native development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <Card className="bg-secondary/20 border-primary/20">
            <CardHeader>
              <CardTitle className="text-center">
                <Github className="w-12 h-12 mx-auto mb-4 text-primary" />
                GitHub Projects
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-8">
                Explore my open-source contributions and React Native projects. 
                Feel free to check out my repositories and code examples.
              </p>
              
              <Button className="bg-primary hover:bg-primary/80" size="lg">
                <a 
                  href="https://github.com/MinhThu100200" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center"
                >
                  <Github className="mr-2" size={18} />
                  View GitHub Profile
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-secondary/20 border-primary/20">
            <CardHeader>
              <CardTitle className="text-center">
                <ExternalLink className="w-12 h-12 mx-auto mb-4 text-primary" />
                Personal Blog
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-8">
                Visit my personal blog where I share insights about React Native development, 
                mobile app trends, and technical tutorials.
              </p>
              
              <Button className="bg-primary hover:bg-primary/80" size="lg">
                <a 
                  href="https://minhthunt.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center"
                >
                  <ExternalLink className="mr-2" size={18} />
                  Visit My Blog
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
