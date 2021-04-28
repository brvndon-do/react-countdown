import React from 'react';
import { Container } from '@material-ui/core';
import { Header } from '../../components/Header';
import { Listview } from '../../components/Listview';
import { ITask } from '../../data/ITask';

interface DashboardViewProps {
  tableHeader: string[];
  data: ITask[];
}

const DashboardView: React.FC<DashboardViewProps> = (props: DashboardViewProps) => {
  const { tableHeader, data } = props;

  return (
    <Container>
      <Header />
      <Listview
        tableHeader={tableHeader}
        data={data} />
    </Container>
  );
};

export default DashboardView;
