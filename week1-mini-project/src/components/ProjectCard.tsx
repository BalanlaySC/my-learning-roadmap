import React from 'react';
import { type Project } from '../data/types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200"
    >
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((cat) => (
            <span
              key={cat}
              className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs text-gray-800 dark:text-gray-200 rounded-lg
              hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;