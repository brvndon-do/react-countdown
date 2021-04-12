import { useState } from 'react';
import constate from 'constate';
import { ITask } from '../../data/ITask';

const Initialize = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  
  const addTask = (task: ITask): void => {
    setTasks(t => [...t, task]);
  };

  const deleteTask = (taskId: number): void => {
    setTasks(tasks.filter(t => t.id !== taskId));
  };

  const toggleStatus = (taskId: number): void => {
    tasks.map(t => {
      if (t.id === taskId)
        t.active = !t.active;
        
        return t;
    });

    setTasks([...tasks]);
  };

  return {
    tasks,
    addTask,
    deleteTask,
    toggleStatus
  };
};

const [TasksProvider, useTasks] = constate(Initialize);

export { useTasks };
export default TasksProvider;

