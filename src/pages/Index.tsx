
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
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      {/* Projects Grid Section */}
      <section className="py-20 bg-background">
        <ProjectsSection />
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-secondary/20">
        <SkillsSection />
      </section>
      
      {/* Tabbed Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-16 max-w-md mx-auto bg-secondary/50 backdrop-blur-sm">
              <TabsTrigger value="about" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                About
              </TabsTrigger>
              <TabsTrigger value="experiences" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Experiences
              </TabsTrigger>
              <TabsTrigger value="contact" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Contact
              </TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-16">
              <AboutSection />
            </TabsContent>

            <TabsContent value="experiences" className="space-y-16">
              <CertificationsSection />
              <GitHubSection />
            </TabsContent>

            <TabsContent value="contact" className="space-y-16">
              <ContactSection />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
