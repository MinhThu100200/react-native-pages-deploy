
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skills = [
  { 
    category: 'Frontend & Mobile Development', 
    items: [
      { name: 'React Native' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'GraphQL' },
      { name: 'React Query' },
      { name: 'RESTful APIs' },
      { name: 'Native Modules' },
      { name: 'Testing (Detox, Jest)' },
    ]
  },
  { 
    category: 'State Management', 
    items: [
      { name: 'Redux Saga' },
      { name: 'Redux Thunk' },
      { name: 'Zustand' },
    ]
  },
  { 
    category: 'CI/CD', 
    items: [
      { name: 'GitLab/GitHub' },
      { name: 'AppCenter' },
      { name: 'CodePush' },
      { name: 'Repack' },
    ]
  },
  { 
    category: 'Other', 
    items: [
      { name: 'WebSocket' },
      { name: 'Firebase' },
      { name: 'Atomic Design' },
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've cultivated a diverse skill set focused on React Native development that allows me to build complete, 
            production-ready mobile applications from concept to deployment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <Card key={index} className="bg-secondary/30 border-primary/20 hover:shadow-md hover:shadow-primary/10 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-primary">{skillGroup.category}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      className="bg-secondary/50 text-foreground p-2 justify-center hover:bg-primary/20 transition-colors"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">React Native</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">TypeScript</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">JavaScript</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">Redux Saga</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">Redux Thunk</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">Zustand</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">React Query</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">Firebase</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">GraphQL</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">REST APIs</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">WebSocket</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">CodePush</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">AppCenter</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">Repack</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">Native Modules</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">GitLab</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">Detox</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">Jest</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">Atomic Design</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
