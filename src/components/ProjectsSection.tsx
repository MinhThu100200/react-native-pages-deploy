
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Mobile App',
    description: 'A complete e-commerce solution with product browsing, cart management, payment integration, and order tracking.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop',
    tags: ['React Native', 'Redux', 'Firebase', 'Stripe'],
    githubUrl: 'https://github.com',
    liveUrl: '#',
  },
  {
    title: 'Health & Fitness Tracker',
    description: 'A comprehensive fitness app with workout plans, progress tracking, nutrition logging, and social sharing features.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1374&auto=format&fit=crop',
    tags: ['React Native', 'TypeScript', 'GraphQL', 'Apple HealthKit'],
    githubUrl: 'https://github.com',
    liveUrl: '#',
  },
  {
    title: 'Travel Companion',
    description: 'An interactive travel app with trip planning, place discovery, itinerary management, and offline map functionality.',
    image: 'https://images.unsplash.com/photo-1497681883844-82b4f0a359a4?q=80&w=1470&auto=format&fit=crop',
    tags: ['React Native', 'Expo', 'Firebase', 'Google Maps API'],
    githubUrl: 'https://github.com',
    liveUrl: '#',
  },
  {
    title: 'Social Media Platform',
    description: 'A full-featured social networking app with user profiles, posts, comments, real-time chat, and media sharing.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1374&auto=format&fit=crop',
    tags: ['React Native', 'Socket.io', 'Redux', 'AWS'],
    githubUrl: 'https://github.com',
    liveUrl: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent mobile application projects. Each one demonstrates 
            different aspects of my technical expertise and problem-solving capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-secondary/20 border-primary/20 overflow-hidden hover:shadow-md hover:shadow-primary/10 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} className="bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex gap-4 justify-end">
                <Button variant="outline" size="sm" className="border-primary/50 text-primary hover:bg-primary/10">
                  <Github className="mr-2 h-4 w-4" />
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                </Button>
                <Button size="sm" className="bg-primary hover:bg-primary/80">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/80" size="lg">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Github className="mr-2" size={18} />
              View More Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
