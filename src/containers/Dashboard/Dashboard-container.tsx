import React from 'react';
import DashboardView from './Dashboard-view';
import { useTasks } from '../../modules/Tasks/Tasks';
import data from '../../data/en.json';

const Dashboard: React.FC = () => {
  const tasks = useTasks();

  return (
    <DashboardView 
      tableHeader={data.TableHeader} 
      data={tasks.tasks}
    />
  );
};

export default Dashboard;
