import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Survey App",
      description: "This app enables users to participate in surveys. Once completed and approved by staff, users earn points that can be exchanged for vouchers, discounts, or gifts.",
      techStack: "React Native, TypeScript",
      bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
      textColor: "text-white"
    },
    {
      title: "PomoAI",
      description: "PomoAI supports users in maintaining focus by reducing social media distractions and uses AI to generate schedules and plans.",
      techStack: "React Native, TypeScript",
      bgColor: "bg-gradient-to-br from-green-400 to-emerald-600",
      textColor: "text-white"
    },
    {
      title: "BachHoaXanh Clone",
      description: "Shopping App for groceries with modern UI/UX design and seamless shopping experience.",
      techStack: "React Native, TypeScript",
      bgColor: "bg-gradient-to-br from-green-500 to-green-700",
      textColor: "text-white"
    },
    {
      title: "E-commerce Mobile",
      description: "Shopping App with modern UI/UX, featuring product catalogs, cart management, and payment integration.",
      techStack: "React Native, TypeScript",
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-700",
      textColor: "text-white"
    },
    {
      title: "UI Kit Component",
      description: "Provided common components for all projects with reusable design system and components library.",
      techStack: "React Native, TypeScript",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-700",
      textColor: "text-white"
    }
  ];

  return (
    <section className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${project.bgColor} rounded-2xl p-6 h-64 flex flex-col justify-between hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg`}
          >
            <div className="space-y-3">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white/40 rounded"></div>
              </div>
              <h3 className={`text-xl font-bold ${project.textColor}`}>
                {project.title}
              </h3>
              <p className={`text-sm ${project.textColor} opacity-90 line-clamp-3`}>
                {project.description}
              </p>
            </div>
            <div className="mt-4">
              <p className={`text-xs ${project.textColor} opacity-75`}>
                Tech Stack: {project.techStack}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;