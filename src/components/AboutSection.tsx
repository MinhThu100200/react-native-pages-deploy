
import React from 'react';
import { Calendar, MapPin, Briefcase, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Passionate React Native Developer</h3>
            <p className="text-muted-foreground mb-6">
              With over 5 years of experience specializing in React Native development, 
              I've built and deployed cross-platform mobile applications for clients 
              ranging from startups to enterprise organizations.
            </p>
            <p className="text-muted-foreground mb-6">
              My approach combines technical expertise with a strong focus on user experience,
              ensuring that the applications I build are not only functionally robust but also 
              intuitive and enjoyable to use.
            </p>
            <p className="text-muted-foreground">
              I'm dedicated to staying at the forefront of mobile development trends and best practices,
              constantly refining my skills and exploring new technologies to deliver the best solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="bg-secondary/50 border-primary/20 hover:border-primary transition-colors duration-300">
              <CardContent className="p-6">
                <Briefcase className="text-primary mb-4" size={28} />
                <h4 className="text-lg font-semibold mb-2">Experience</h4>
                <p className="text-muted-foreground">5+ years in React Native & mobile development</p>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary/50 border-primary/20 hover:border-primary transition-colors duration-300">
              <CardContent className="p-6">
                <Award className="text-primary mb-4" size={28} />
                <h4 className="text-lg font-semibold mb-2">Expertise</h4>
                <p className="text-muted-foreground">Mobile architecture, UI/UX, state management</p>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary/50 border-primary/20 hover:border-primary transition-colors duration-300">
              <CardContent className="p-6">
                <Calendar className="text-primary mb-4" size={28} />
                <h4 className="text-lg font-semibold mb-2">Availability</h4>
                <p className="text-muted-foreground">Open to freelance & full-time opportunities</p>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary/50 border-primary/20 hover:border-primary transition-colors duration-300">
              <CardContent className="p-6">
                <MapPin className="text-primary mb-4" size={28} />
                <h4 className="text-lg font-semibold mb-2">Location</h4>
                <p className="text-muted-foreground">San Francisco, CA | Remote</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
