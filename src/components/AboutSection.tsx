
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
            <h3 className="text-2xl font-semibold mb-6">Nguyen Thi Minh Thu</h3>
            <p className="text-muted-foreground mb-6">
              Passionate and experienced React Native Developer with almost 3 years of hands-on experience, 
              specializing in building scalable and user-friendly mobile applications. Proven ability to solve 
              complex problems and a passion for staying updated with the latest technologies in mobile app development.
            </p>
            <p className="text-muted-foreground mb-6">
              Currently working at CMC Global in HCM, Vietnam, focusing on developing and maintaining MemberShip 
              and Community modules for Channel and Esports on a livestream application. Previously worked at 
              Mobile World Investment Corporation (MWG) developing multiple mobile applications.
            </p>
            <p className="text-muted-foreground">
              Skilled in JavaScript, TypeScript, React Native, Redux (Thunk/Saga), Zustand, GraphQL, WebSocket, 
              RESTful APIs, and Native Modules (Objective-C/Kotlin).
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="bg-secondary/50 border-primary/20 hover:border-primary transition-colors duration-300">
              <CardContent className="p-6">
                <Briefcase className="text-primary mb-4" size={28} />
                <h4 className="text-lg font-semibold mb-2">Experience</h4>
                <p className="text-muted-foreground">Almost 3 years in React Native & mobile development</p>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary/50 border-primary/20 hover:border-primary transition-colors duration-300">
              <CardContent className="p-6">
                <Award className="text-primary mb-4" size={28} />
                <h4 className="text-lg font-semibold mb-2">Education</h4>
                <p className="text-muted-foreground">HCM City University Technology and Education (GPA: 3.2/4)</p>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary/50 border-primary/20 hover:border-primary transition-colors duration-300">
              <CardContent className="p-6">
                <Calendar className="text-primary mb-4" size={28} />
                <h4 className="text-lg font-semibold mb-2">Languages</h4>
                <p className="text-muted-foreground">Vietnamese (Native), English (Professional)</p>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary/50 border-primary/20 hover:border-primary transition-colors duration-300">
              <CardContent className="p-6">
                <MapPin className="text-primary mb-4" size={28} />
                <h4 className="text-lg font-semibold mb-2">Location</h4>
                <p className="text-muted-foreground">HCM, Vietnam | Remote</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
