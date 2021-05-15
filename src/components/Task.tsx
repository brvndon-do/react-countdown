import React, { useState, useEffect } from 'react';
import { ITask } from '../data/ITask';
import { useTasks } from '../modules/Tasks/Tasks';
import {
  IconButton,
  TableCell,
  TableRow,
} from '@material-ui/core';
import { PlayArrow, Stop, Delete } from '@material-ui/icons';

interface TaskProps {
  task: ITask;
}

export const Task: React.FC<TaskProps> = (props: TaskProps) => {
  const { task } = props;
  const { deleteTask, toggleStatus } = useTasks();
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (task.time <= 0) {
      task.isCompleted = true;
      task.active = false;
    }

    if (task.active && !task.isCompleted) {
      timer = setInterval(() => {
        task.time -= 1;
        setCounter((counter) => counter + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [task.active, counter]);

  return (
    <TableRow>
      <TableCell>{task.id + 1}</TableCell>
        <TableCell>{task.taskName}</TableCell>
        <TableCell>{task.time}</TableCell>
        <TableCell>
          {!task.isCompleted && (
            <IconButton onClick={() => toggleStatus(task.id)}>
            {
              task.active
              ? <Stop />
              : <PlayArrow />
            }
            </IconButton>
          )}
          <IconButton onClick={() => deleteTask(task.id)}>
            <Delete />
          </IconButton>
      </TableCell>
    </TableRow>
  );
};
