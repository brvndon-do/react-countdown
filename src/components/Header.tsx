import React, { useState } from 'react';
import { Box, IconButton, makeStyles } from '@material-ui/core';
import { Add, Clear } from '@material-ui/icons';
import { AddTask } from '../components/AddTask';
import { useTasks } from '../modules/Tasks/Tasks';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    float: 'right'
  }
});

export const Header: React.FC = () => {
  const { clearTasks } = useTasks();
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className={classes.root} display="flex">
      <IconButton onClick={handleOpen}>
        <Add />
      </IconButton>
      <IconButton onClick={() => clearTasks()}>
        <Clear />
      </IconButton>
      {open && (<AddTask isOpen={open} handleClose={handleClose}/>)}
    </Box>
  );
};
