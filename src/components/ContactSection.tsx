
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Mail, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
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
