
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { MOCK_PROJECTS } from '../constants';
import { ProjectItem } from '../types';
import { CodeBracketIcon, UsersIcon, DocumentTextIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import Button from '../components/Button';

const ProjectCard: React.FC<{ project: ProjectItem }> = ({ project }) => {
  return (
    <div id={project.id} className="bg-white dark:bg-mukesa-gray-dark rounded-xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-105">
      {project.imageUrl && (
        <div className="w-full h-56 bg-gray-200 dark:bg-mukesa-black"> {/* Added bg for image container */}
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-mukesa-blue dark:text-mukesa-blue mb-2 flex items-center">
          <LightBulbIcon className="h-6 w-6 mr-2 text-mukesa-red" />
          {project.title}
        </h3>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
          <UsersIcon className="h-4 w-4 mr-1 text-mukesa-red" />
          Team: {project.team.join(', ')}
        </div>
        <p className="text-gray-700 dark:text-mukesa-gray-text text-base mb-4 flex-grow line-clamp-4">{project.description}</p>
        <div className="mt-auto flex space-x-3">
          {project.repoLink && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => window.open(project.repoLink, '_blank')}
              className="border-mukesa-blue text-mukesa-blue hover:bg-mukesa-blue hover:text-white dark:border-mukesa-blue dark:text-mukesa-blue dark:hover:bg-mukesa-blue dark:hover:text-white"
            >
              <CodeBracketIcon className="h-4 w-4 mr-1 inline" /> View Code
            </Button>
          )}
          {project.paperLink && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => window.open(project.paperLink, '_blank')}
              className="border-mukesa-red text-mukesa-red hover:bg-mukesa-red hover:text-white dark:border-mukesa-red dark:text-mukesa-red dark:hover:bg-mukesa-red dark:hover:text-white"
            >
              <DocumentTextIcon className="h-4 w-4 mr-1 inline" /> Read Paper
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsPage: React.FC = () => {
  return (
    <SectionWrapper title="Student Projects & Papers" subtitle="Explore innovative projects and insightful research by MUKESA members.">
        <div className="mb-10 bg-gray-50 dark:bg-mukesa-gray-dark p-6 rounded-lg shadow-lg flex items-center">
            <CodeBracketIcon className="h-10 w-10 text-mukesa-blue mr-4 flex-shrink-0" />
            <div>
                <h3 className="text-xl font-semibold text-mukesa-blue dark:text-mukesa-blue">Innovation in Action</h3>
                <p className="text-gray-700 dark:text-mukesa-gray-text">
                    Our students are actively involved in diverse projects, tackling real-world problems with creative engineering solutions.
                </p>
            </div>
        </div>
      {MOCK_PROJECTS.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-center text-xl text-gray-600 dark:text-mukesa-gray-text py-10">
          No projects or papers to display at the moment. Our students are busy innovating!
        </p>
      )}
       <div className="mt-12 text-center">
        <p className="text-gray-600 dark:text-mukesa-gray-text">Have a project to showcase? <a href="mailto:projects@mukesa.example.com" className="text-mukesa-red hover:underline">Submit your project!</a></p>
      </div>
    </SectionWrapper>
  );
};

export default ProjectsPage;
