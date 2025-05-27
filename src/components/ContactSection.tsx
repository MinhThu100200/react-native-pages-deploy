
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Mail, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            I'm currently available for freelance work and open to full-time positions.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Contact Information</h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out through any of the following channels. 
                I'm always open to discussing new projects, opportunities, or partnerships.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="mr-4 text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:mintu.ngth@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      mintu.ngth@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Social Media</h3>
              <p className="text-muted-foreground mb-6">
                Connect with me on social media to see updates on my latest projects and tech articles.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://github.com/MinhThu100200" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Github size={20} />
                </a>
                
                <a 
                  href="https://linkedin.com/in/ntminhthu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            
            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Availability</h3>
              <div className="bg-secondary/30 border border-primary/30 rounded-lg p-4">
                <p className="font-medium mb-2">Currently available for:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                    Freelance projects
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                    Contract work
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                    Full-time positions
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                    Consulting
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
