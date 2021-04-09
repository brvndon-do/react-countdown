import React from 'react';
import {
  Container,
  IconButton,
  Table,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
} from '@material-ui/core';
import { PlayArrow, Stop, Delete } from '@material-ui/icons';
import { ITask } from '../../data/ITask';
import { AddTask } from '../../components/AddTask';

interface DashboardViewProps {
  tableHeader: string[];
  data: ITask[];
}

const DashboardView: React.FC<DashboardViewProps> = (props: DashboardViewProps) => {
  const { tableHeader, data } = props;

  return (
    <Container>
      <AddTask />
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
                {task.active 
                ? <IconButton>
                    <Stop />
                  </IconButton>
                : <IconButton>
                    <PlayArrow />
                  </IconButton>}
                <IconButton>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default DashboardView;
