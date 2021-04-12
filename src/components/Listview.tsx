import React from 'react';
import {
  IconButton,
  Table,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
} from '@material-ui/core';
import { PlayArrow, Stop, Delete } from '@material-ui/icons';
import { ITask } from '../data/ITask';
import { useTasks } from '../modules/Tasks/Tasks';

interface ListviewProps {
  tableHeader: string[];
  data: ITask[];
}

export const Listview: React.FC<ListviewProps> = (props: ListviewProps) => {
  const { tableHeader, data } = props;
  const { deleteTask, toggleStatus } = useTasks();

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
          <TableRow key={idx}>
            <TableCell>{task.id}</TableCell>
            <TableCell>{task.taskName}</TableCell>
            <TableCell>{task.time}</TableCell>
            <TableCell>
              <IconButton onClick={() => toggleStatus(task.id)}>
                {
                  task.active
                  ? <Stop />
                  : <PlayArrow />
                }
              </IconButton>
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
