
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const skills = [
  { 
    category: 'Frontend', 
    items: [
      { name: 'React Native', level: 95 },
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'Redux', level: 85 },
    ]
  },
  { 
    category: 'Mobile', 
    items: [
      { name: 'iOS Development', level: 80 },
      { name: 'Android Development', level: 80 },
      { name: 'React Navigation', level: 92 },
      { name: 'Expo', level: 88 },
      { name: 'App Deployment', level: 85 },
    ]
  },
  { 
    category: 'UI/UX', 
    items: [
      { name: 'Responsive Design', level: 90 },
      { name: 'Animation', level: 85 },
      { name: 'Styled Components', level: 88 },
      { name: 'UI Libraries', level: 90 },
      { name: 'Design Systems', level: 82 },
    ]
  },
  { 
    category: 'Other', 
    items: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'CI/CD', level: 82 },
      { name: 'Testing', level: 85 },
      { name: 'RESTful APIs', level: 88 },
      { name: 'GraphQL', level: 80 },
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
            I've cultivated a diverse skill set that allows me to build complete, 
            production-ready mobile applications from concept to deployment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <Card key={index} className="bg-secondary/30 border-primary/20 hover:shadow-md hover:shadow-primary/10 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-primary">{skillGroup.category}</h3>
                <div className="space-y-6">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2 bg-secondary" indicatorClassName="bg-primary" />
                    </div>
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
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">Expo</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">Redux</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">MobX</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">React Navigation</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">TypeScript</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">Firebase</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">GraphQL</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">REST APIs</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">Jest</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">Detox</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">CI/CD</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">App Store</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">Google Play</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">Fastlane</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">Styled Components</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">Git</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">GitHub</Badge>
            <Badge className="bg-secondary text-foreground hover:bg-primary transition-colors">Jira</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
