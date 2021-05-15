import React, { useState, useEffect } from 'react';
import { ITask } from '../data/ITask';
import { useTasks } from '../modules/Tasks/Tasks';
import {
  IconButton,
  TableCell,
  TableRow,
  makeStyles
} from '@material-ui/core';
import { PlayArrow, Stop, Delete } from '@material-ui/icons';

const useStyles = makeStyles({
  completed: {
    backgroundColor: '#00ff44'
  }
});

interface TaskProps {
  task: ITask;
}

export const Task: React.FC<TaskProps> = (props: TaskProps) => {
  const { task } = props;
  const { deleteTask, toggleStatus } = useTasks();
  const [counter, setCounter] = useState<number>(0);
  const classes = useStyles();

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (task.time <= 0) {
      task.isCompleted = true;
      task.active = false;
      setCounter(counter => counter + 1);
    }

    if (task.active && !task.isCompleted) {
      timer = setInterval(() => {
        task.time -= 1;
        setCounter(counter => counter + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [task.active, counter]);

  return (
    <TableRow className={task.isCompleted ? classes.completed : ''}>
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
