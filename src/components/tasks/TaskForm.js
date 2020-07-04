import React, { useState, useEffect, useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import tasksContext from '../../context/tasks/tasksContext';
import { v4 as uuid } from 'uuid';

const TaskForm = () => {
  const projectsContext = useContext(projectContext);
  const { actualProject } = projectsContext;

  const taskContext = useContext(tasksContext);
  const { 
    selectedTask, 
    taskError, 
    getProjectTasks, 
    addTask, 
    validateTask,
    updateTask
   } = taskContext;

  const [task, setTask] = useState({
    id: null,
    name: '',
    projectId: null,
    status: null
  });

  useEffect(() => {
    if (selectedTask !== null) {
      setTask(selectedTask);
    } else {
      setTask({ name: '' });
    }
  }, [selectedTask]);

  const { name } = task;

  if (!actualProject) return null;  // Handle not selected project

  const handleChange = event => {
    setTask({
      ...task,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    console.log(task)
    event.preventDefault();
    if (name.trim() === "") { // Validate input
      validateTask();
      return;
    };

    if (selectedTask === null) {  // When selectedTask equals null, the user is adding a new task
      task.projectId = actualProject[0].id; // Inject selected project ID
      task.status = false; // Set initial status to false
      task.id = uuid(); // Assign unique ID to the task
      addTask(task); // Update task state with the new task
    } else {
      updateTask(task);
    }
    
    getProjectTasks(actualProject[0].id); // Refresh task list
    setTask({name: ''}); // Reset form
  };

  return ( 
    <div className='formulario'>
      <form
        onSubmit={handleSubmit}
      >
        <div className='contenedor-input'>
          <input
            type='text'
            className='input-text'
            placeholder={selectedTask ? selectedTask.name : name}
            name='name'
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className='contenedor-input'>
          <input
            type='submit'
            className='btn btn-primario btn-submit btn-block'
            value={selectedTask ? 'Edit task' : 'Add task'}
          />
        </div>
      </form>
      {taskError 
        ? <p className='mensaje error'>Task name required</p>
        : null
      }
    </div>
   );
}
 
export default TaskForm;