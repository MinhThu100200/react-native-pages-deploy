
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const GitHubSection = () => {
  return (
    <section id="github" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">GitHub</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out my open-source contributions and projects on GitHub.
            I'm passionate about sharing knowledge and contributing to the React Native community.
          </p>
        </div>
        
        <Card className="bg-secondary/20 border-primary/20 max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">
              <Github className="w-16 h-16 mx-auto mb-4 text-primary" />
              Explore My Projects & Contributions
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-8">
              I regularly share my work on GitHub, including React Native components, 
              utility functions, and example projects. Feel free to explore my repositories,
              contribute to ongoing projects, or use my code in your own applications.
            </p>
            
            <Button className="bg-primary hover:bg-primary/80" size="lg">
              <a 
                href="https://github.com/MinhThu100200" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center"
              >
                <Github className="mr-2" size={18} />
                View My GitHub Profile
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GitHubSection;
