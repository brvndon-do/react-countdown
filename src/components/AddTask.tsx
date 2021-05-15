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
import en from '../data/en.json';

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
    tasks.addTask({
      id: tasks.lastId,
      taskName: taskName,
      time: time,
      active: false,
      isCompleted: false
    });

    handleClose();
  };


  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>{en.DialogTitle}</DialogTitle>
      <DialogContent>
        <TextField onChange={handleTextChange}/>
        <DialogContentText>{en.DialogText[0]}</DialogContentText>
        <TextField
          value={time}
          onChange={handleTimeChange}
        />
        <DialogContentText>{en.DialogText[1]}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAddTask}>
          {en.DialogActions[0]}
        </Button>
        <Button onClick={handleClose}>
          {en.DialogActions[1]}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
