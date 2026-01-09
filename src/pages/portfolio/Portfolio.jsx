import React from 'react'
import ProjectCarousel from './ProjectCarousel'


export const Portfolio = () => {
   return (
    <div className="min-h-screen bg-gray-200">
      <div className="text-center py-16">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
          Portfolio Showcase
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Explore our latest projects and case studies. Click the + button to see detailed information about each project.
        </p>
      </div>

      <ProjectCarousel />

      <div className="text-center py-16">
        <p className="text-gray-500">
          Use the navigation arrows or dots to browse through projects
        </p>
      </div>
    </div>
  );

}
