
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import GitHubSection from '@/components/GitHubSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Code Pattern Background */}
      <div className="fixed inset-0 -z-10 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ctext x='10' y='20' font-family='monospace' font-size='8' fill='%23ffffff' opacity='0.1'%3Eif (success) %7B%3C/text%3E%3Ctext x='15' y='35' font-family='monospace' font-size='8' fill='%23ffffff' opacity='0.1'%3Ereturn true;%3C/text%3E%3Ctext x='10' y='50' font-family='monospace' font-size='8' fill='%23ffffff' opacity='0.1'%3E%7D%3C/text%3E%3Ctext x='10' y='70' font-family='monospace' font-size='8' fill='%23ffffff' opacity='0.1'%3Econst app = () =&gt; %7B%3C/text%3E%3Ctext x='15' y='85' font-family='monospace' font-size='8' fill='%23ffffff' opacity='0.1'%3E// magic happens%3C/text%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}></div>
      </div>

      <Navbar />
      <HeroSection />
      
      <div className="container mx-auto px-4 md:px-6 py-16">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 max-w-md mx-auto bg-secondary/50 backdrop-blur-sm">
            <TabsTrigger value="about" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              About
            </TabsTrigger>
            <TabsTrigger value="experiences" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Experiences
            </TabsTrigger>
            <TabsTrigger value="projects" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Projects
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-16">
            <AboutSection />
            <SkillsSection />
          </TabsContent>

          <TabsContent value="experiences" className="space-y-16">
            <CertificationsSection />
            <ContactSection />
          </TabsContent>

          <TabsContent value="projects" className="space-y-16">
            <ProjectsSection />
            <GitHubSection />
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
