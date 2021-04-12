import React, { useState } from 'react';
import { useTasks } from '../modules/Tasks/Tasks';
import {
  Box,
  Paper,
  TextField,
  Button,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: '40px',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export const AddTask: React.FC = () => {
  const tasks = useTasks();
  const classes = useStyles();
  const [taskName, setTaskName] = useState<string>('');
  const [time, setTime] = useState<number>(30);

  const handleTextChange = (e: React.ChangeEvent<{ value: string }>) => {
    setTaskName(e.target.value);
  };

  const handleTimeChange = (e: React.ChangeEvent<{ value: string }>) => {
    setTime(Number(e.target.value));
  };

  const handleAddTask = () => {
    const i: number = tasks.tasks.length;
    
    tasks.addTask({
      id: i,
      taskName: taskName,
      time: time,
      active: false
    });
  };

  return (
    <Paper elevation={2} className={classes.root}>
      <Box className={classes.form} pl={3}>
        <TextField onChange={handleTextChange} placeholder="Task name" />
        <TextField onChange={handleTimeChange} placeholder="Time" />
        <Button onClick={() => handleAddTask()}>Add</Button>
      </Box>
    </Paper>
  );
};
