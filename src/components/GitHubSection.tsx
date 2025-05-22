
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Github, GitFork, Star, GitPullRequestDraft, Activity } from 'lucide-react';

// Mock GitHub data
const mockRepos = [
  {
    name: 'react-native-awesome-app',
    description: 'A production-ready React Native template with all the best practices',
    stars: 342,
    forks: 87,
    language: 'TypeScript',
    url: 'https://github.com',
  },
  {
    name: 'react-native-ui-library',
    description: 'A comprehensive UI component library for React Native applications',
    stars: 289,
    forks: 65,
    language: 'JavaScript',
    url: 'https://github.com',
  },
  {
    name: 'rn-animation-examples',
    description: 'Collection of animation examples and techniques for React Native',
    stars: 218,
    forks: 42,
    language: 'TypeScript',
    url: 'https://github.com',
  },
  {
    name: 'react-native-navigation-boilerplate',
    description: 'Boilerplate for React Native with navigation pre-configured',
    stars: 176,
    forks: 38,
    language: 'JavaScript',
    url: 'https://github.com',
  },
];

const mockContributions = [
  { week: 'Week 1', count: 12 },
  { week: 'Week 2', count: 8 },
  { week: 'Week 3', count: 15 },
  { week: 'Week 4', count: 7 },
  { week: 'Week 5', count: 22 },
  { week: 'Week 6', count: 10 },
  { week: 'Week 7', count: 14 },
  { week: 'Week 8', count: 18 },
];

const languageColors = {
  JavaScript: '#f1e05a',
  TypeScript: '#2b7489',
  CSS: '#563d7c',
  HTML: '#e34c26',
};

const GitHubSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="github" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">GitHub Activity</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out my open-source contributions and recent GitHub activity.
            I'm passionate about sharing knowledge and contributing to the React Native community.
          </p>
        </div>
        
        <Tabs defaultValue="repositories" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="repositories">Top Repositories</TabsTrigger>
            <TabsTrigger value="activity">Contribution Activity</TabsTrigger>
          </TabsList>
          
          <TabsContent value="repositories">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {loading ? (
                Array(4).fill(0).map((_, index) => (
                  <Card key={index} className="bg-secondary/20 border-primary/20">
                    <CardHeader className="space-y-2">
                      <Skeleton className="h-5 w-3/4" />
                      <Skeleton className="h-4 w-full" />
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mt-4">
                        <Skeleton className="h-4 w-1/4" />
                        <div className="flex gap-4">
                          <Skeleton className="h-4 w-16" />
                          <Skeleton className="h-4 w-16" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                mockRepos.map((repo, index) => (
                  <Card key={index} className="bg-secondary/20 border-primary/20 hover:shadow-md hover:shadow-primary/10 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <a href={repo.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          {repo.name}
                        </a>
                      </CardTitle>
                      <CardDescription>{repo.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center">
                          <span 
                            className="inline-block w-3 h-3 rounded-full mr-2" 
                            style={{ backgroundColor: languageColors[repo.language] }}
                          ></span>
                          <span className="text-sm text-muted-foreground">{repo.language}</span>
                        </div>
                        <div className="flex gap-4">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Star className="mr-1 h-4 w-4" />
                            {repo.stars}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <GitFork className="mr-1 h-4 w-4" />
                            {repo.forks}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="activity">
            <Card className="bg-secondary/20 border-primary/20">
              <CardHeader>
                <CardTitle>Contribution Activity</CardTitle>
                <CardDescription>Last 8 weeks of GitHub contributions</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <Skeleton className="h-64 w-full" />
                ) : (
                  <div className="relative h-64">
                    <div className="flex items-end justify-between h-full">
                      {mockContributions.map((week, index) => (
                        <div key={index} className="flex flex-col items-center w-full">
                          <div 
                            className="bg-primary/70 hover:bg-primary transition-colors w-full mx-1"
                            style={{ 
                              height: `${(week.count / 25) * 100}%`,
                              minHeight: '10%'
                            }}
                          ></div>
                          <span className="text-xs mt-2 text-muted-foreground">{week.week}</span>
                        </div>
                      ))}
                    </div>
                    <div className="absolute left-0 top-0 h-full flex flex-col justify-between py-2">
                      {[25, 20, 15, 10, 5, 0].map((value, index) => (
                        <div key={index} className="text-xs text-muted-foreground">{value}</div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
              {loading ? (
                Array(3).fill(0).map((_, index) => (
                  <Card key={index} className="bg-secondary/20 border-primary/20">
                    <CardContent className="p-6">
                      <Skeleton className="h-8 w-8 rounded-full mb-4" />
                      <Skeleton className="h-5 w-1/2 mb-2" />
                      <Skeleton className="h-10 w-full" />
                    </CardContent>
                  </Card>
                ))
              ) : (
                <>
                  <Card className="bg-secondary/20 border-primary/20">
                    <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                      <GitPullRequestDraft className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Pull Requests</h3>
                      <p className="text-3xl font-bold text-primary">24</p>
                      <p className="text-sm text-muted-foreground mt-2">Last 90 days</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-secondary/20 border-primary/20">
                    <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                      <Activity className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Commits</h3>
                      <p className="text-3xl font-bold text-primary">187</p>
                      <p className="text-sm text-muted-foreground mt-2">Last 90 days</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-secondary/20 border-primary/20">
                    <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                      <Github className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Repositories</h3>
                      <p className="text-3xl font-bold text-primary">16</p>
                      <p className="text-sm text-muted-foreground mt-2">Total public</p>
                    </CardContent>
                  </Card>
                </>
              )}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/80" size="lg">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Github className="mr-2" size={18} />
              Visit My GitHub Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
