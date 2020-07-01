import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';

const ProjectList = () => {
  // Extract projects from projects state
  const projectsContext = useContext(projectContext);
  const { projects, getProjects } = projectsContext;

  useEffect(() => {
    getProjects();
  }, []);

  // Control project list
  if (projects.length === 0) return <p>There are no projects yet</p>;

  return ( 
    <ul className='listado-proyectos'>
      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
   );
}
 
export default ProjectList;