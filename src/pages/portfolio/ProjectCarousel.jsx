import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import imagen1 from '../../img/AgadorPortafolio 1.png';

const projects = [
  {
    id: 1,
    title: "Agador Spartacus",
    subtitle: "Development",
    description: "A Real Estate Development Firm",
    problem: "Complex property management and client communication",
    solution: "Custom CRM system with automated workflows and client portal",
    image: imagen1,
    technologies: ["React", "Node.js", "PostgreSQL", "TypeScript"]
  },
  {
    id: 2,
    title: "Formación",
    subtitle: "Continua",
    description: "Educational Platform for Continuous Learning",
    problem: "LEADS y ventas.",
    solution: "Inbound Marketing, Research, Reingeniería de Estrategia.",
    image: imagen1,
    technologies: ["Vue.js", "Laravel", "MySQL", "Docker"]
  },
  {
    id: 3,
    title: "ISACA",
    subtitle: "México",
    description: "Professional Certification Platform",
    problem: "Certification tracking and member management",
    solution: "Comprehensive member portal with certification tracking",
    image: imagen1,
    technologies: ["Angular", "Express.js", "MongoDB", "AWS"]
  },
  {
    id: 4,
    title: "Digital Agency",
    subtitle: "Portfolio",
    description: "Creative Agency Showcase",
    problem: "Client acquisition and portfolio presentation",
    solution: "Interactive portfolio with case studies and testimonials",
    image: imagen1,
    technologies: ["Next.js", "Strapi", "GraphQL", "Vercel"]
  }
];

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedCard, setExpandedCard] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
    setExpandedCard(null);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
    setExpandedCard(null);
  };

  const toggleExpanded = (projectId) => {
    setExpandedCard(expandedCard === projectId ? null : projectId);
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % projects.length;
      visible.push(projects[index]);
    }
    return visible;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Carousel Container */}
        <div className="overflow-hidden">
          <div className="flex gap-6 transition-transform duration-500 ease-in-out px-16">
            {getVisibleProjects().map((project, index) => (
              <div
                key={`${project.id}-${currentIndex}`}
                className={`flex-shrink-0 transition-all duration-500 ${
                  index === 1 ? 'w-96' : 'w-80 opacity-70 scale-95'
                }`}
              >
                <ProjectCard
                  project={project}
                  isExpanded={expandedCard === project.id}
                  onToggleExpanded={() => toggleExpanded(project.id)}
                  isPrimary={index === 1}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setExpandedCard(null);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white w-8' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;