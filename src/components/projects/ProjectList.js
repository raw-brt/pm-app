import React from 'react';
import Project from './Project';

const ProjectList = () => {

  // Dummy content to test
  const projects = [
    {key: 1, name: 'Ecommerce'},
    {key: 2, name: 'Log and ROI'},
    {key: 3, name: 'Tesla Cybertruck'}
  ];

  return ( 
    <ul className='listado-proyectos'>
      {projects.map(project => (
        <Project key={project.key} project={project} />
      ))}
    </ul>
   );
}
 
export default ProjectList;