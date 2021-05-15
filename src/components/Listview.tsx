import React from 'react';
import {
  Card,
  Table,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  makeStyles
} from '@material-ui/core';
import { Task } from './Task';
import { ITask } from '../data/ITask';
import en from '../data/en.json';

const useStyles = makeStyles({
  card: {
    borderRadius: 10
  }
});

interface ListviewProps {
  data: ITask[];
}

export const Listview: React.FC<ListviewProps> = (props: ListviewProps) => {
  const { data } = props;
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
            <Task task={task} key={idx} />
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};
