import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

// Company projects data
const companyProjects = [
  {
    title: 'SOOP',
    description: 'A livestream application connecting creators with audiences through high-quality live broadcasts and interactive features. Supports seamless video streaming, real-time communication, and monetization tools.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1374&auto=format&fit=crop',
    tags: ['React Native', 'TypeScript', 'Zustand', 'RESTful APIs', 'React Query', 'CodePush', 'Atomic design'],
    responsibilities: 'Led development of the MemberShip and Community modules for the Channel and Esports sections. Implemented real-time chat and notification systems using WebSockets and push notifications.',
    teamSize: '8 developers',
    duration: 'Jan 2022 - Present',
  },
  {
    title: 'Avakids',
    description: 'An e-commerce platform providing parents with a convenient way to purchase high-quality products and services for children. Implemented Repack for building and followed mono front-end model.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop',
    tags: ['React Native', 'TypeScript', 'Redux Saga', 'GraphQL', 'Firebase', 'WebSocket'],
    responsibilities: 'Designed and implemented the product browsing and shopping cart features. Optimized app performance and reduced load times by 40%.',
    teamSize: '6 developers',
    duration: 'Apr 2021 - Dec 2021',
  },
  {
    title: 'Qua Tang VIP',
    description: 'A loyalty app allowing customers to earn bonus points when placing orders or purchasing products. Features include chat module using WebSocket for customer support, and notifications via Firebase.',
    image: 'https://images.unsplash.com/photo-1497681883844-82b4f0a359a4?q=80&w=1470&auto=format&fit=crop',
    tags: ['React Native', 'TypeScript', 'Redux Thunk', 'GraphQL', 'WebSocket', 'Watermelon DB'],
    responsibilities: 'Developed the loyalty points system and integrated WebSocket for real-time customer support chat. Implemented offline data persistence with Watermelon DB.',
    teamSize: '5 developers',
    duration: 'Sep 2020 - Mar 2021',
  },
  {
    title: 'Xwork',
    description: 'Application to assist staff members in conducting online activities, such as creating job tickets and signing contracts, using Repack for building with mono front-end architecture.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1374&auto=format&fit=crop',
    tags: ['React Native', 'JavaScript', 'Redux Thunk', 'RESTful APIs', 'Firebase', 'WebSocket'],
    responsibilities: 'Built the contract signing feature with digital signature integration. Implemented job ticket creation and tracking workflow.',
    teamSize: '4 developers',
    duration: 'Mar 2020 - Aug 2020',
  },
];

// Personal projects data
const personalProjects = [
  {
    title: 'Survey App',
    description: 'This app enables users to participate in surveys. Once completed and approved by staff, users earn points that can be exchanged for vouchers, discounts, or gifts.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1470&auto=format&fit=crop',
    tags: ['React Native', 'TypeScript', 'Redux Toolkit', 'Redux Thunk', 'CodePush', 'AppCenter', 'TestFlight', 'Axios', 'RESTful APIs'],
    responsibilities: 'Setting up and configuring key app modules such as Redux Thunk, Redux Toolkit, API client integration, build pipeline, gift exchange features, and authentication systems.',
    teamSize: '2 developers',
    duration: 'Jan 2024 - June 2024',
  },
  {
    title: 'PomoAI',
    description: 'PomoAI supports users in maintaining focus by reducing social media distractions and uses AI to swiftly generate schedules and plans to save time.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1374&auto=format&fit=crop',
    tags: ['React Native', 'TypeScript', 'Zustand', 'React Query', 'CodePush', 'AppCenter', 'TestFlight', 'Axios', 'RESTful APIs', 'Firebase', 'Native Modules', 'Gemini API'],
    responsibilities: 'Sole developer of core app features, authentication, onboarding, and CI/CD automation. Delivered AI-driven task generation and user productivity tools.',
    teamSize: '1 developer',
    duration: 'May 2025 - Present',
  },
];

const ProjectCard = ({ project, onClick }) => {
  return (
    <Card className="bg-secondary/20 border-primary/20 overflow-hidden hover:shadow-md hover:border-primary/50 transition-all duration-300">
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
          {project.tags.slice(0, 4).map((tag, tagIndex) => (
            <Badge key={tagIndex} className="bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 4 && (
            <Badge className="bg-secondary/40 text-muted-foreground hover:bg-secondary/60 transition-colors">
              +{project.tags.length - 4}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground line-clamp-3">
          {project.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={() => onClick(project)} className="bg-primary hover:bg-primary/80">
          Show Details
        </Button>
      </CardFooter>
    </Card>
  );
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleShowDetails = (project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Company Projects */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">Company Projects</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional projects I've contributed to during my career as a React Native Developer.
              Each project showcases different technical challenges and solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyProjects.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                onClick={handleShowDetails} 
              />
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">Personal Projects</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Side projects and experiments I've built to explore new technologies and improve my skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalProjects.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                onClick={handleShowDetails} 
              />
            ))}
          </div>
        </div>

        {/* Project Details Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          {selectedProject && (
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold gradient-text">{selectedProject.title}</DialogTitle>
              </DialogHeader>
              
              <div className="space-y-4">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground">{selectedProject.description}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
                  <p className="text-muted-foreground">{selectedProject.responsibilities}</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Team Size</h3>
                    <p className="text-muted-foreground">{selectedProject.teamSize}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Duration</h3>
                    <p className="text-muted-foreground">{selectedProject.duration}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} className="bg-primary/20 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

export default ProjectsSection;
