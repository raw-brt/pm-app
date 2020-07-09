import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';
import alertContext from '../../context/alerts/alertContext';

const ProjectList = () => {
  const { message, projects, getProjects } = useContext(projectContext);
  const { alert, showAlert } = useContext(alertContext);

  useEffect(() => {
    if (message) showAlert(message.msg, message.category);

    getProjects();
    // eslint-disable-next-line
  }, [message]);

  // Control project list
  if (projects.length === 0) return <p>There are no projects yet</p>;

  return ( 
    <ul className='listado-proyectos'>
      <div>
        {alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null}
      </div>
      {projects.map(project => (
        <Project key={project._id} project={project} />
      ))}
    </ul>
   );
}
 
export default ProjectList;