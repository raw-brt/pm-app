import React, { useState, useEffect, useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import tasksContext from '../../context/tasks/tasksContext';

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
    name: ''
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
    event.preventDefault();
    if (name.trim() === "") { // Validate input
      validateTask();
      return;
    };

    if (selectedTask === null) {  // When selectedTask equals null, the user is adding a new task
      task.project = actualProject[0]._id; // Inject selected project ID
      addTask(task); // Update task state with the new task
    } else {
      updateTask(task);
    }
    
    getProjectTasks(actualProject[0]._id); // Refresh task list
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