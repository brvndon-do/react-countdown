import React from 'react';
import {
  IconButton,
  Table,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  makeStyles
} from '@material-ui/core';
import { PlayArrow, Stop, Delete } from '@material-ui/icons';
import { ITask } from '../data/ITask';
import { useTasks } from '../modules/Tasks/Tasks';

const useStyles = makeStyles({
  completed: {
    backgroundColor: '#00ff44'
  }
});

interface ListviewProps {
  tableHeader: string[];
  data: ITask[];
}

export const Listview: React.FC<ListviewProps> = (props: ListviewProps) => {
  const { tableHeader, data } = props;
  const { deleteTask, toggleStatus } = useTasks();
  const classes = useStyles();

  return (
    <Table>
      <TableHead>
        <TableRow>
          {tableHeader.map((text, idx) => (
            <TableCell key={idx}>{text}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((task, idx) => (
          <TableRow className={task.isCompleted ? classes.completed : ''} key={idx}>
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
        ))}
      </TableBody>
    </Table>
  );
};
