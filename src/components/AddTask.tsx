import React, { useState } from 'react';
import { useTasks } from '../modules/Tasks/Tasks';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
} from '@material-ui/core';
import data from '../data/en.json';

interface AddTaskProps {
  isOpen: boolean;
  handleClose: () => void;
}

export const AddTask: React.FC<AddTaskProps> = (props: AddTaskProps) => {
  const { isOpen, handleClose } = props;
  const tasks = useTasks();
  const [taskName, setTaskName] = useState('');
  const [time, setTime] = useState(30);

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

    handleClose();
  };


  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>{data.DialogTitle}</DialogTitle>
      <DialogContent>
        <TextField onChange={handleTextChange}/>
        <DialogContentText>{data.DialogText[0]}</DialogContentText>
        <TextField
          value={30}
          onChange={handleTimeChange}
        />
        <DialogContentText>{data.DialogText[1]}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAddTask}>
          {data.DialogActions[0]}
        </Button>
        <Button onClick={handleClose}>
          {data.DialogActions[1]}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
