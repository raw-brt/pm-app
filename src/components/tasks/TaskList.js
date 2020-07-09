import React, { useContext, Fragment } from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectContext';
import tasksContext from '../../context/tasks/tasksContext';

const TaskList = () => {
  const projectsContext = useContext(projectContext);
  const taskContext = useContext(tasksContext);
  const { actualProject, handleDeleteProject } = projectsContext;
  const { selectedProjectTasks } = taskContext;

  if (!actualProject) return <h2>Select a project</h2>;
  const [project] = actualProject;

  const deleteProject = () => {
    handleDeleteProject(project._id);
  };

  return (
    <Fragment> 
        {actualProject === null
          ? <h2>Select one project in the sidebar</h2>
          : (
              <Fragment>
                <h2>{actualProject[0].name}</h2>
                <ul className='listado-tareas'>
                  {selectedProjectTasks.length === 0 || undefined
                    ? <li className='tarea'>There are no tasks for this project</li>
                    : selectedProjectTasks.map(task => <Task key={task._id} task={task} />)
                  }
                </ul>
                <button
                  type='button'
                  className='btn btn-eliminar'
                  onClick={() => deleteProject()}
                >
                  Delete project &times;
                </button>
              </Fragment>
            )
        }
    </Fragment>
   );
}
 
export default TaskList;