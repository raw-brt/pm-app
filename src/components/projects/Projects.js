import React, { useContext, useEffect } from 'react';
import Sidebar from '../layout/Sidebar';
import Bar from '../layout/Bar';
import TaskForm from '../tasks/TaskForm';
import TaskList from '../tasks/TaskList';
import authContext from '../../context/auth/authContext';

const Projects = () => {
  const { handleAuthenticateUser } = useContext(authContext);

  useEffect(() => {
    handleAuthenticateUser();
    // eslint-disable-next-line
  }, []);

  return ( 
    <div className='contenedor-app'>
      <Sidebar />
      <div className='seccion-principal'>
        <Bar />
        <main>
          <div className='contenedor-tareas'>
            <TaskForm />
            <TaskList />
          </div>
        </main>
      </div>
    </div>
   );
}
 
export default Projects;