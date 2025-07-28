import React from 'react';
import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export const ProjectsSection: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>
    </main>
  )
};

export default ProjectsSection;