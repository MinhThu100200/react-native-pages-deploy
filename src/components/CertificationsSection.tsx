
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Calendar } from 'lucide-react';

const certifications = [
  {
    name: 'Programming Fundamentals in Kotlin',
    issuer: 'Coursera',
    date: 'Apr 2025',
    credentialId: 'GOCTPHVINMK6'
  },
  {
    name: 'CI/CD for React Native with App Center',
    issuer: 'Udemy',
    date: 'Nov 2023'
  },
  {
    name: 'Foundations of User Experience (UX)',
    issuer: 'Coursera',
    date: 'Mar 2023',
    credentialId: 'ENN4RZPWDGBP'
  }
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-16 md:py-24 bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">Certifications</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that demonstrate my commitment to continuous learning and skill development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-secondary/30 border-primary/20 hover:shadow-md hover:shadow-primary/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <Award className="h-6 w-6 text-primary mr-2" />
                  <h3 className="font-semibold">{cert.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Issued by {cert.issuer}</p>
                <div className="flex items-center text-sm text-muted-foreground mb-1">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{cert.date}</span>
                </div>
                {cert.credentialId && (
                  <p className="text-xs text-muted-foreground">
                    Credential ID: {cert.credentialId}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
