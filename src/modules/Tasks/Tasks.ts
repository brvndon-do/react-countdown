import { useState } from 'react';
import constate from 'constate';
import { ITask } from '../../data/ITask';

const Initialize = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [lastId, setLastId] = useState<number>(0);
  
  const addTask = (task: ITask): void => {
    setTasks(t => [...t, task]);
    setLastId(lastId + 1);
  };

  const deleteTask = (taskId: number): void => {
    setTasks(tasks.filter(t => t.id !== taskId));
  };

  const clearTasks = (): void => {
    setTasks([]);
    setLastId(0);
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
    lastId,
    addTask,
    deleteTask,
    clearTasks,
    toggleStatus
  };
};

const [TasksProvider, useTasks] = constate(Initialize);

export { useTasks };
export default TasksProvider;

