import React from 'react';
import {
  Card,
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
import en from '../data/en.json';

const useStyles = makeStyles({
  card: {
    borderRadius: 10
  },
  completed: {
    backgroundColor: '#00ff44'
  }
});

interface ListviewProps {
  data: ITask[];
}

export const Listview: React.FC<ListviewProps> = (props: ListviewProps) => {
  const { data } = props;
  const { deleteTask, toggleStatus } = useTasks();
  const tableHeader = en.TableHeader;
  const classes = useStyles();

  return (
    <Card className={classes.card} elevation={1}>
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
    </Card>
  );
};
