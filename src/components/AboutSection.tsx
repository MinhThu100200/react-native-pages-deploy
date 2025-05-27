
import React from 'react';
import { Calendar, MapPin, Briefcase, Award, FileText, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h1>
            
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Passionate and experienced React Native Developer with almost 3 years of hands-on experience, 
                specializing in building scalable and user-friendly mobile applications.
              </p>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                I prioritize <strong className="text-primary">user experience</strong> and love optimizing product 
                performance to create <strong className="text-primary">smooth, intuitive, and reliable applications</strong>.
              </p>
            </div>
            
            {/* Experience Section */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold mb-6">Experience</h2>
              
              {/* CMC Global Experience */}
              <div className="bg-secondary/20 border border-primary/20 rounded-lg p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">C</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-semibold">CMC Global</h3>
                        <p className="text-primary font-medium">Mobile Developer</p>
                      </div>
                      <span className="text-muted-foreground text-sm">Jan 2022 — Present</span>
                    </div>
                    
                    <div className="mt-4 space-y-3">
                      <div>
                        <p className="font-medium text-muted-foreground mb-2">Project: SOOP Livestream Application</p>
                        <p className="text-muted-foreground mb-2">Technologies: React Native, TypeScript, Zustand, RESTful APIs, React Query, CodePush, Atomic design</p>
                        <p className="font-medium text-muted-foreground mb-2">Contributions & Responsibilities:</p>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                          <li>Developed and maintained cross-platform mobile applications using React Native, TypeScript, enhancing user experience and functionality across iOS and Android.</li>
                          <li>Led development of the MemberShip and Community modules for the Channel and Esports sections.</li>
                          <li>Implemented real-time chat and notification systems using WebSockets and push notifications.</li>
                          <li>Collaborated with UI/UX teams, BA teams for improve performance and user experience.</li>
                          <li>Integrated APIs, third-party libraries, and backend services to support dynamic app functionality.</li>
                          <li>Optimized app performance, addressing bugs and improving load times to ensure a smooth user experience.</li>
                          <li>Applied SOLID principles, Design Pattern, refactored and structured codebases to ensure scalability, enabling easy extension of features as the application grows.</li>
                          <li>Followed Flux architecture principles, worked with state management framework, middleware such as Zustand, React Query.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* MWG Experience */}
              <div className="bg-secondary/20 border border-primary/20 rounded-lg p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">M</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-semibold">MWG - Mobile World Investment Corporation</h3>
                        <p className="text-primary font-medium">Mobile Developer</p>
                      </div>
                      <span className="text-muted-foreground text-sm">Mar 2020 — Dec 2021</span>
                    </div>
                    
                    <div className="mt-4 space-y-4">
                      <div>
                        <p className="font-medium text-muted-foreground mb-2">Project: Avakids E-commerce Platform, Qua Tang VIP Loyalty App, Xwork Staff Management</p>
                        <p className="text-muted-foreground mb-2">Technologies: React Native, TypeScript, Redux Saga, Redux Thunk, GraphQL, Firebase, WebSocket, Watermelon DB</p>
                        <p className="font-medium text-muted-foreground mb-2">Contributions & Responsibilities:</p>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                          <li>Developed and maintained multiple cross-platform mobile applications using React Native and TypeScript.</li>
                          <li>Designed and implemented product browsing and shopping cart features for e-commerce platforms.</li>
                          <li>Built loyalty points system and integrated WebSocket for real-time customer support chat.</li>
                          <li>Implemented offline data persistence with Watermelon DB for enhanced user experience.</li>
                          <li>Created contract signing feature with digital signature integration for staff management applications.</li>
                          <li>Implemented job ticket creation and tracking workflow systems.</li>
                          <li>Optimized app performance and reduced load times by 40% across all projects.</li>
                          <li>Integrated Firebase for push notifications and real-time data synchronization.</li>
                          <li>Collaborated with teams using mono front-end architecture and Repack for building.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Education Section */}
            <div className="bg-secondary/20 border border-primary/20 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="text-primary" size={24} />
                <h2 className="text-2xl font-semibold">Education</h2>
              </div>
              <div className="ml-9">
                <p className="text-lg font-medium">Bachelor of Software Engineering</p>
                <p className="text-muted-foreground">HCM City University Technology and Education (GPA: 3.2/4)</p>
                <p className="text-muted-foreground">2017 - 2021</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-secondary/20 border-primary/20 transition-colors duration-300">
                <CardContent className="p-6">
                  <Briefcase className="text-primary mb-4" size={24} />
                  <h3 className="text-xl font-semibold mb-2">Experience</h3>
                  <p className="text-muted-foreground">Almost 3 years in React Native & mobile development</p>
                </CardContent>
              </Card>
              
              <Card className="bg-secondary/20 border-primary/20 transition-colors duration-300">
                <CardContent className="p-6">
                  <MapPin className="text-primary mb-4" size={24} />
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">HCM, Vietnam</p>
                </CardContent>
              </Card>
              
              <Card className="bg-secondary/20 border-primary/20 transition-colors duration-300">
                <CardContent className="p-6">
                  <Calendar className="text-primary mb-4" size={24} />
                  <h3 className="text-xl font-semibold mb-2">Languages</h3>
                  <p className="text-muted-foreground">Vietnamese (Native), English (Professional)</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary hover:bg-primary/80">
                <a href="#" className="flex items-center">
                  <FileText className="mr-2" size={18} />
                  Get My Resume
                </a>
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <a href="https://linkedin.com/in/ntminhthu" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <ExternalLink className="mr-2" size={18} />
                  View My LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
