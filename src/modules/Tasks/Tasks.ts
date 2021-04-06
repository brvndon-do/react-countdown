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

  return {
    tasks,
    addTask,
    deleteTask
  };
};

const [TasksProvider, useTasks] = constate(Initialize);

export { useTasks };
export default TasksProvider;

