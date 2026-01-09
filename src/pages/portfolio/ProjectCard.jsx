import React from 'react';
import { Plus, X } from 'lucide-react';

const ProjectCard = ({ project, isExpanded, onToggleExpanded, isPrimary }) => {
  return (
    <div className={`relative bg-gradient-to-br from-white-900 to-white-800 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-black/20 ${
      isPrimary ? 'shadow-xl' : ''
    }`}>
      {/* Background Image */}
      <div className="absolute inset-0 opacity-50">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-800/80" />
      </div>

      {/* Card Content */}
      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm font-medium">
              {project.subtitle}
            </p>
          </div>
          
          <button
            onClick={onToggleExpanded}
            className="bg-yellow-400 hover:bg-yellow-300 rounded-full p-2 transition-all duration-300 hover:scale-110 hover:rotate-90"
          >
            {isExpanded ? (
              <X className="w-4 h-4 text-gray-900" />
            ) : (
              <Plus className="w-4 h-4 text-gray-900" />
            )}
          </button>
        </div>

        {/* Basic Description */}
        <p className="text-gray-700 text-sm mb-4">
          {project.description}
        </p>

        {/* Expanded Content */}
        <div className={`transition-all duration-500 overflow-hidden ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-4 border-t border-gray-700">
            <div className="space-y-4">
              <div>
                <h4 className="text-gray-700 font-semibold mb-2">Problemática:</h4>
                <p className="text-gray-700 text-sm">{project.problem}</p>
              </div>
              
              <div>
                <h4 className="text-gray-700 font-semibold mb-2">Solución:</h4>
                <p className="text-gray-700 text-sm">{project.solution}</p>
              </div>

              <div>
                <h4 className="text-gray-700 font-semibold mb-2">Tecnologías:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-white/10 text-gray-700 text-xs px-2 py-1 rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card Footer */}
        <div className="mt-6 pt-4 border-t border-gray-700">
          <div className="flex items-center justify-between">
            {/* <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-gray-700 text-xs font-bold">
                  {project.title.charAt(0)}
                </span>
              </div>
              <span className="text-gray-400 text-xs">
                Ver proyecto completo
              </span>
            </div> */}
            
            <button className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;